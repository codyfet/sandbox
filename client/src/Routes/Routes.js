import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Registration} from "../Pages/Registration";
import {Session} from "../Pages/Session";
import {Admin} from "../Pages/Admin";

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
            <Route path="/" exact component={Admin} />
            <Route path="/session" component={Session} />
            <Route path="/admin" component={Admin} />
            <Redirect to="/" />
        </Switch>
    );
};