import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form, Input, Message} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";
import axios from "axios";

/**
 * Логика выключения кнопки F5.
 */
// document.onkeydown = function (e) {
//     if (e.keyCode === 116) {
//         return false;
//     }
// };

/**
 * Страница регистрации.
 */
export const Registration = () => {
    const [errorMessage, setMessage] = useState(null);
    const {appState, dispatch} = useContext(AppContext);
    const history = useHistory();

    const handleNameChange = (e) => {
        dispatch({
            type: "CHANGE_NAME",
            payload: e.target.value
        });
    };

    const handleEmailChange = (e) => {
        dispatch({
            type: "CHANGE_EMAIL",
            payload: e.target.value
        });
    };

    const handleLoginClick = () => {
        axios.post("/api/session/create", {name: appState.name, email: appState.email, started: new Date()})
            .then((response) => {
                dispatch({
                    type: "SAVE_SESSION_ID",
                    payload: {
                        sessionId: response.data._id,
                        task: response.data.task
                    }
                });

                history.push("/session");
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setMessage(error.response.data);
                }
                return error;
            });
    };

    return (
        <div className="registration">
            <blockquote>
                <p>Добро пожаловать в игру от компании <img className="acc-logo" src="Acc_Logo.PNG" />.</p>
                <p>Твоя цель — решить как можно больше задач при помощи JavaScript за 10 минут.</p>
            </blockquote>
            <div className="registration-form">
                <Form>
                    <Form.Field>
                        <Input
                            onChange={handleEmailChange}
                            value={appState.email}
                            className="registration-form-email"
                            placeholder='Твой email'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input
                            onChange={handleNameChange}
                            value={appState.name}
                            className="registration-form-name"
                            placeholder='Твоё имя'

                        />
                    </Form.Field>
                </Form>

                <div className="registration-form-button">
                    <Button className="a-button" onClick={handleLoginClick}>Начать</Button>
                </div>
            </div>
            {errorMessage && (
                <Message negative>
                    <Message.Header>Ошибка</Message.Header>
                    <p>{errorMessage}</p>
                </Message>
            )}
        </div>
    );
};
