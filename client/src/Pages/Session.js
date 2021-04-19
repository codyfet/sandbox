import React, {useCallback, useContext, useEffect, useState} from "react";
import {Button, Container, Grid, Icon, Label, Segment, Table} from "semantic-ui-react";
import {str_pad_left} from "../Utils/TimeUtils";
import {AppContext} from "../Contexts/AppContext";
import {TimeLeftModal} from "./TimeLeftModal";
import {getSolvedCount} from "../Utils/CommonUtils";
import mocha from "mocha/mocha";
import {Controlled as CodeMirror} from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import {putData} from "../Utils/RequestUtils";
// eslint-disable-next-line no-unused-vars
const assert = require("assert");
import AccLogo from "../Assets/Acc_Logo.png";

/**
 * Настройки CodeMirror.
 */
const CODE_MIRROR_OPTIONS = {
    lineNumbers: true,
    mode: "javascript",
    theme: "monokai"
};

/**
 * Страница Сессии.
 */
export const Session = () => {
    const {appState, dispatch} = useContext(AppContext);
    const [error, setError] = useState(null);
    mocha.setup("bdd");
    mocha._cleanReferencesAfterRun = false;

    useEffect(() => {
        if (!appState.session.remainedTime) {
            return;
        }

        const intervalId = setInterval(() => {
            dispatch({
                type: "CHANGE_REMAINED",
                payload: appState.session.remainedTime - 1
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [appState.session.remainedTime, dispatch]);

    // Логика вычисления текущей задачи.
    const currentTaskIndex = appState.session.tasks.findIndex((item) => item.isCurrent);
    const task = appState.session.tasks[currentTaskIndex];
    const currentTaskSolved = appState.passedTests.length === task.testsCount;

    useEffect(() => {
        if (currentTaskSolved) {
            putData(`/api/session/${appState.session.id}/update`, {solvedTime: new Date(), solvedNumber: currentTaskIndex + 1});
        }
    }, [appState.passedTests.length]);

    // Логика таймера
    const minutes = Math.floor(appState.session.remainedTime / 60);
    const seconds = appState.session.remainedTime - minutes * 60;
    const finalTime = str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

    // Логика бэджей
    const badges = [];
    const solvedCount = getSolvedCount(appState);
    for (let i = 0; i < solvedCount; i++) {
        badges.push(
            <div><Icon className="star-badge" name='star' size='huge' key={i} /></div>
        );
    }

    const [currentCode, setCurrentCode] = useState(task.preCode);

    useEffect(() => {
        setCurrentCode(task.preCode);
    }, [task.preCode]);

    /**
     * Обработчик изменения кода.
     */
    const handleCodeChange = useCallback((editor, data, code) => {
        setCurrentCode(code);
    }, []);

    /**
     * Обработчик нажатия на кнопку Выполнить.
     */
    const handleRunClick = useCallback(() => {
        /**
         * Очищаем тестовые данные с предыдущего раза.
         */
        if (mocha.suite.suites.length > 0) {
            mocha.suite.suites = [];
        }

        setError(null);

        dispatch({
            type: "CLEAR_REPORT"
        });

        try {
            eval(`${currentCode} ${task.test}`);
        } catch (error) {
            setError(error.message);
        }

        mocha
          .run()
          .on("fail", (test) => {
            dispatch({
                type: "ADD_FAILED_TEST",
                payload: test
            });
          })
          .on("pass", (test) => {
            dispatch({
                type: "ADD_PASSED_TEST",
                payload: {
                    id: task.id,
                    test
                },

            });
          });
    }, [currentCode, dispatch, task.id, task.test]);

    /**
     * Обработчик нажатия на кнопку Выполнить.
     */
    const handleNextClick = useCallback(() => {
        dispatch({
            type: "CHANGE_TASK_INDEX",
            payload: currentTaskIndex + 1
        });
    }, [dispatch, currentTaskIndex]);

    /**
     * Фикрсируем результат в БД.
     */
    if (appState.session.remainedTime === 0) {
        putData(`/api/session/${appState.session.id}/update`, {finished: new Date()});
    }

    return (
        <Container className="session">
            <div className="accenture-logo-wrapper">
                <img src={AccLogo} alt=""/>
            </div>
            <div className="userinfo">
                <div>
                    <div>{appState.email}</div>
                    <div>{appState.name}</div>
                </div>
                <div>
                    {finalTime}
                </div>
            </div>
            <div className="text-title">Задание {currentTaskIndex + 1}</div>
            <Segment >
                <Grid stackable className="profile-data">
                    <Grid.Column className={"task-panel"} width={8}>
                        <div className="task">
                            {task.description}
                        </div>
                        <CodeMirror
                            value={currentCode}
                            onBeforeChange={handleCodeChange}
                            onChange={handleCodeChange}
                            options={CODE_MIRROR_OPTIONS}
                        />
                        <div className="sandbox-actions">
                            <Button disabled={currentTaskSolved} onClick={handleRunClick} as="a" key="run" className="a-button">Выполнить</Button>
                            {currentTaskSolved && <Button onClick={handleNextClick} as="a" key="next" className="a-button">Далее</Button>}
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div id="mocha"></div>
                        {
                            error && (
                                <div>
                                    Ошибка!
                                    <div className="error-block">{error}</div>
                                </div>
                            )
                        }
                        {
                            (appState.passedTests.length > 0 || appState.failedTests.length > 0) && (
                                <div>
                                    <div>
                                        Результат выполнения тестов:
                                    </div>
                                    <div>
                                        <Label className="passed" color='green' as='a' key="green">
                                            <Icon name='check' /> {appState.passedTests.length}
                                        </Label>
                                        <Label className="failed" color='red' as='a' key="red">
                                            <Icon name='cancel' /> {appState.failedTests.length}
                                        </Label>
                                    </div>
                                    {appState.failedTests.length > 0 && (
                                        <div className="failed-section">
                                            <Label as='a' color='red' ribbon>
                                                Не пройдены тесты
                                            </Label>
                                            <Table celled>
                                                <Table.Body>
                                                    {
                                                        appState.failedTests.map(
                                                            (item) => {
                                                                return (
                                                                    <Table.Row key={item.title} negative>
                                                                        <Table.Cell>
                                                                            {item.title}
                                                                            <div className="error-block">{item.err.name}: {item.err.message}</div>
                                                                        </Table.Cell>
                                                                        <Table.Cell><Icon name='close' />Не пройден</Table.Cell>
                                                                    </Table.Row>
                                                                );
                                                            }
                                                        )
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </div>
                                    )}
                                </div>
                            )
                        }

                    </Grid.Column>
                </Grid>
            </Segment>
            <div className="badges">{badges}</div>
            {appState.session.remainedTime === 0 && <TimeLeftModal />}
        </Container>
    );
};
