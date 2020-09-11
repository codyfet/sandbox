import React, {useEffect, useState} from "react";
// import { useHistory } from "react-router-dom";
// import { Button, Input } from "semantic-ui-react";
// import { AppContext } from "../Contexts/AppContext";
// import { postData } from "../Utils/RequestUtils";
import {Container, List, Rating, Table} from "semantic-ui-react";

function getFormattedDateTime(dateString) {
    const dt = new Date(dateString);
    return `${
        (dt.getMonth()+1).toString().padStart(2, "0")}.${
        dt.getDate().toString().padStart(2, "0")}.${
        dt.getFullYear().toString().padStart(4, "0")} ${
        dt.getHours().toString().padStart(2, "0")}:${
        dt.getMinutes().toString().padStart(2, "0")}:${
        dt.getSeconds().toString().padStart(2, "0")}`;
}

/**
 * Страница регистрации.
 */
export const Admin = () => {
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("api/session");
            response = await response.json();
            setSessions(response);
        }

        fetchMyAPI();

    }, []);

    return (
        <Container>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Имя</Table.HeaderCell>
                        <Table.HeaderCell>Сессия началась</Table.HeaderCell>
                        <Table.HeaderCell>Решённых задач</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {Array.isArray(sessions) && sessions.length > 0 && sessions.map((session) => {
                        return(
                            <>
                                <Table.Row key={session._id}>
                                    <Table.Cell>
                                        {session.name}
                                    </Table.Cell>
                                    <Table.Cell singleLine>{getFormattedDateTime(session.started)}</Table.Cell>
                                    <Table.Cell>
                                        <Rating icon='star' defaultRating={session.solvedTasks.length} />
                                        <List bulleted>
                                            {
                                                session.solvedTasks.map((task) => {
                                                    return (
                                                        <List.Item key={task.solvedNumber}>Задача {task.solvedNumber} решена {getFormattedDateTime(task.solvedTime)}</List.Item>
                                                    );
                                                })
                                            }
                                          </List>
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        );

                    })}

                </Table.Body>
            </Table>
        </Container>
    );
};
