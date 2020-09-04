import React, {useCallback, useContext} from "react";
import {Link} from "react-router-dom";
import {Button, Input} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";

/**
 * Страница регистрации.
 */
export const Registration = () => {
    const {appState, dispatch} = useContext(AppContext);

    const handleNameChange = useCallback((e) => {
        dispatch({
            type: "CHANGE_NAME",
            payload: e.target.value
        });
    }, []);

    return (
        <div className="registration">
            <blockquote>
                <p>Добро пожаловать в игру от компании Accenture! Твоя цель - решить как можно больше задач при помощи JavaScript за 10 минут.</p>
            </blockquote>
            <div className="registration-form">
                <Input onChange={handleNameChange} value={appState.name} className="registration-form-name" placeholder='Твоё имя' />
                <div className="registration-form-button">
                    <Button as={Link} to="/session" key="session" className="a-button">Начать</Button>
                </div>
            </div>
        </div>
    );
};
