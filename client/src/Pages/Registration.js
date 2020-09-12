import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Form, Input} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";
import axios from "axios";

// document.onkeydown = function (e) {
//     if (e.keyCode === 116) {
//         return false;
//     }
// };

/**
 * Страница регистрации.
 */
export const Registration = () => {
    const [code, setCode] = useState("");
    const [errorMessage, setMessage] = useState(null);
    const {appState, dispatch} = useContext(AppContext);
    const history = useHistory();

    const handleNameChange = (e) => {
        dispatch({
            type: "CHANGE_NAME",
            payload: e.target.value
        });
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleLoginClick = () => {
        // postData("/api/session/create", {name: appState.name, started: new Date(), code})
        //     .then((data) => {

        //             dispatch({
        //                 type: "SAVE_SESSION_ID",
        //                 payload: data._id
        //             });

        //             history.push("/session");
        //         // }
        //         //  else {
        //         //     setMessage(error.message);
        //         // }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        axios.post("/api/session/create", {name: appState.name, started: new Date(), code})
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
                setMessage(error.message);
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
                        <Input onChange={handleNameChange} value={appState.name} className="registration-form-name" placeholder='Твоё имя' />
                    </Form.Field>
                    <Form.Field
                        control={Input}
                        placeholder='Код'
                        onChange={handleCodeChange}
                        value={code}
                        error={errorMessage ? {
                            content: "Код неактивный"
                        } : null}
                    />
                </Form>

                <div className="registration-form-button">
                    <Button className="a-button" onClick={handleLoginClick}>Начать</Button>
                </div>
            </div>
        </div>
    );
};
