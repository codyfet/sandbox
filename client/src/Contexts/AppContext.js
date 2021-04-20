import React, {useReducer} from "react";
import {TASKS} from "../Tasks";

function getAppInitialState() {
    return {
        name: "",
        email: "",
        failedTests: [],
        passedTests: [],
        session: {
            id: null,
            task: null,
            remainedTime: 60 * 10,
            // remainedTime: 10,
            /**
             * id
             * description
             * preCode
             * codeReturn
             * testExpression
             * testResult
             * test
             *
             * solved: false
             * isCurrent: false
             */
            tasks: TASKS.map((item, index) => ({
                ...item,
                solved: false,
                isCurrent: index === 0 ? true : false
            }))
        }
    };
}

const AppContext = React.createContext();

const reducer = (state, action) => {
    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.payload
        };
    }
    if (action.type === "CHANGE_EMAIL") {
        return {
            ...state,
            email: action.payload
        };
    }
    if (action.type === "CHANGE_REMAINED") {
        return {
            ...state,
            session: {
                ...state.session,
                remainedTime: action.payload
            }
        };
    }
    if (action.type === "CHANGE_TASK_INDEX") {
        const updatedTasks = [...state.session.tasks];
        updatedTasks[action.payload - 1].isCurrent = false;

        if (action.payload < updatedTasks.length) {
            updatedTasks[action.payload].isCurrent = true;
        }

        return {
            ...state,
            passedTests: [],
            failedTests: [],
            session: {
                ...state.session,
                tasks: updatedTasks
            }
        };
    }
    if (action.type === "REFRESH_SESSION") {
        return getAppInitialState();
    }
    if (action.type === "ADD_FAILED_TEST") {
        const updateFailedTests = [...state.failedTests, action.payload];
        return {
            ...state,
            failedTests: updateFailedTests
        };
    }
    if (action.type === "ADD_PASSED_TEST") {
        const updatePassedTests = [...state.passedTests, action.payload.test];
        const id = action.payload.id;
        const updatedTasks = [...state.session.tasks];

        for (let i = 0; i < updatedTasks.length; i++) {
            if (updatedTasks[i].id === id && updatedTasks[i].testsCount === updatePassedTests.length) {
                updatedTasks[i].solved = true;
            }
        }

        return {
            ...state,
            passedTests: updatePassedTests,
            session: {
                ...state.session,
                tasks: updatedTasks
            }
        };
    }
    if (action.type === "CLEAR_REPORT") {
        return {
            ...state,
            failedTests: [],
            passedTests: []
        };
    }
    if (action.type === "SAVE_SESSION_ID") {
        return {
            ...state,
            session: {
                ...state.session,
                id: action.payload.sessionId,
                task: action.payload.task
            }
        };
    }
};

const AppProvider = (props) => {
    const [appState, dispatch] = useReducer(reducer, getAppInitialState());

    return (
        <AppContext.Provider value={{appState, dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
};

export {AppProvider, AppContext};
