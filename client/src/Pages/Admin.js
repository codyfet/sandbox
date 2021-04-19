import React, {useEffect, useState} from "react";
import {Container, Header, Icon, List, Table} from "semantic-ui-react";
import {getDifferenceInSeconds, getFormattedDateTime} from "../Utils/DateUtils";

/**
 * Страница с выводом результатов.
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
        <Container className="admin-page">
            <Header as='h1'>Список сессий</Header>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Имя</Table.HeaderCell>
                        <Table.HeaderCell>Сессия началась</Table.HeaderCell>
                        <Table.HeaderCell>Сессия закончилась</Table.HeaderCell>
                        <Table.HeaderCell>Решённых задач</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {Array.isArray(sessions) && sessions.length > 0 && sessions.map((session) => {
                        return(
                            <>
                                <Table.Row key={session._id}>
                                    <Table.Cell>
                                        <div>{session.name}</div>
                                        <div>{session.email}</div>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{getFormattedDateTime(session.started)}</Table.Cell>
                                    <Table.Cell singleLine>{session.finished ? getFormattedDateTime(session.finished) : "-"}</Table.Cell>
                                    <Table.Cell>
                                        {session.solvedTasks.map((task) => <Icon color='yellow' key={task.id} name="star" />)}
                                        <List bulleted>
                                            {
                                                session.solvedTasks.map((task) => {
                                                    return (
                                                        <List.Item key={task.solvedNumber}>Задача {task.solvedNumber} решена {getFormattedDateTime(task.solvedTime)} ({getDifferenceInSeconds(session.started, task.solvedTime)})</List.Item>
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
