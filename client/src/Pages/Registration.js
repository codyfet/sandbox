import React, {useCallback, useContext} from "react";
import {useHistory} from "react-router-dom";
import {Button, Input} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";
import {postData} from "../Utils/RequestUtils";

/**
 * Страница регистрации.
 */
export const Registration = () => {
    const {appState, dispatch} = useContext(AppContext);
    const history = useHistory();

    const handleNameChange = useCallback((e) => {
        dispatch({
            type: "CHANGE_NAME",
            payload: e.target.value
        });
    }, []);

    const handleLoginCLick = () => {
        postData("/api/session/create", {name: appState.name, started: new Date()})
            .then((data) => {
                dispatch({
                    type: "SAVE_SESSION_ID",
                    payload: data._id
                });
            });

        history.push("/session");
    };

    return (
        <div className="registration">
            <blockquote>
                <p>Добро пожаловать в игру от компании <img className="acc-logo" src="src/Assets/Acc_Logo_Black_Purple_RGB.png" />.</p>
                <p>Твоя цель — решить как можно больше задач при помощи JavaScript за 10 минут.</p>
            </blockquote>
            <div className="registration-form">
                <Input onChange={handleNameChange} value={appState.name} className="registration-form-name" placeholder='Твоё имя' />
                <div className="registration-form-button">
                    <Button className="a-button" onClick={handleLoginCLick}>Начать</Button>
                </div>
            </div>
        </div>
    );
};
