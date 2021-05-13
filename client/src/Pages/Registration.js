import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Checkbox, Form, Input, Message} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";
import axios from "axios";
import AccLogo from "../Assets/Acc_Logo.png";
import {validateEmail} from "../Utils/CommonUtils";

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
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isAgreementChecked, setAgreementChecked] = useState(false);
    const [isLoading, setLoading] = useState(false);
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
        setLoading(true);
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
                setLoading(false);
                if (error.response.status === 401) {
                    setMessage(error.response.data);
                }
                return error;
            });
    };

    return (
        <>
            <div className="accenture-logo-wrapper">
                <img src={AccLogo} alt=""/>
            </div>
            <div className="registration">
                <blockquote>
                    <p>Добро пожаловать в игру от компании Accenture. Твоя цель — решить как можно больше задач при помощи JavaScript за 10 минут.</p>
                    <p>Побеждает тот, кто решил максимальное количество задач за наименьшее время.</p>
                    {/* <p>Результаты подводим каждый день конференции в 21:00.</p>
                    <p>Подарки всем участникам, лучшим - рюкзаки Xiaomi (пришлём почтой).</p> */}
                </blockquote>
                <div className="registration-form">
                    <Form>
                        <Form.Field>
                            <Input
                                onChange={handleEmailChange}
                                onBlur={(e) => {
                                    const isValidaEmailAfterBlur = validateEmail(e.target.value);
                                    setIsValidEmail(isValidaEmailAfterBlur);

                                    if (!isValidaEmailAfterBlur) {
                                        setMessage("Email введён некорректно.");
                                    } else {
                                        setMessage(null);
                                    }
                                }}
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
                        <Button
                            disabled={!isValidEmail || !appState.email || !isAgreementChecked || isLoading}
                            loading={isLoading}
                            className="a-button"
                            onClick={handleLoginClick}
                        >
                            Начать
                        </Button>
                    </div>
                </div>
                <div className="checkbox-agreement-wrapper">
                    <Checkbox
                        onChange={(e, data) => {
                            setAgreementChecked(data.checked);
                        }}
                        checked={isAgreementChecked}
                        label='Подтверждаю использование моих персональных данных в целях проведения конкурса и награждения призами.'
                    />
                </div>
                {errorMessage && (
                    <Message negative>
                        <Message.Header>Ошибка</Message.Header>
                        <p>{errorMessage}</p>
                    </Message>
                )}
            </div>
        </>
    );
};
