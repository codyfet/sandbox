import React, {useEffect, useState} from "react";
import {Container, Header, Icon, List, Table} from "semantic-ui-react";
import axios from "axios";

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

function getDifferenceInSeconds(a, b) {
    const dif = new Date(b).getTime() - new Date(a).getTime();

    const Seconds_from_T1_to_T2 = dif / 1000;
    const Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

    return secondsToHms(Seconds_Between_Dates);
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}


/**
 * Страница регистрации.
 */
export const Admin = () => {
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        // async function fetchMyAPI() {
        //     let response = await fetch("api/session");
        //     response = await response.json();
        //     setSessions(response);
        // }

        // fetchMyAPI();

        axios.get("/api/session").then((resp) => {
            setSessions(resp.data);
        });

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
                                        {session.name}
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
