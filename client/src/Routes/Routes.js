import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Registration} from "../Pages/Registration";
import {Session} from "../Pages/Session";

/**
 * Возвращает набор доступных роутов приложения.
 *
 * @param {boolean} isAutheticated Признак авторизации пользователя.
 */
export const Routes = () => {
    // const {user} = useSelector(state => state);
    // const isAutheticated = user?.data;

    // if (isAutheticated) {
    //     return (
    //         <Switch>
    //             <Route path="/" exact component={Main} />
    //             <Route path="/diary" component={Diary} />
    //             <Route path="/profile" component={Profile} />
    //             <Redirect to="/" />
    //         </Switch>
    //     );
    // }

    return (
        <Switch>
            <Route path="/" exact component={Registration} />
            <Route path="/session" component={Session} />
            <Redirect to="/" />
        </Switch>
    );
};