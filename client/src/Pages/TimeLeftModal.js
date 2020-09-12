import React, {useContext} from "react";
import {Button, Header, Modal} from "semantic-ui-react";
import {AppContext} from "../Contexts/AppContext";
import {getSolvedCount} from "../Utils/CommonUtils";
import {useHistory} from "react-router-dom";

export const TimeLeftModal = () => {
    const {appState, dispatch} = useContext(AppContext);
    const solvedCount = getSolvedCount(appState);
    let history = useHistory();

    const handleExitClick = () => {
        history.push("/");

        dispatch({
            type: "REFRESH_SESSION"
        });
    };

    return (
        <Modal open>
            <Modal.Header>Время истекло</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    {solvedCount > 3 && <Header>Отличный результат!</Header>}
                    <p>Задач решено: {solvedCount}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button positive onClick={handleExitClick}>
                    Выйти
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

