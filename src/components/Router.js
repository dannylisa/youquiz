import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from "../routes/Auth";
import CreateAccount from "../routes/CreateAccount";
import Home from "../routes/Home";
import Draw from "../routes/Draw";
import ShowResult from '../routes/ShowResult';

const AppRouter = ({ isLoggedIn, user, hasAccount, doc_user_id, currentInfo, goals }) => {
    return (
        <Router>
            <Switch>
            {isLoggedIn? (
                hasAccount ?
                <>
                    <Route exact path="/">
                        <Home user={user} doc_user_id={doc_user_id} currentInfo={currentInfo} goals={goals}/>
                    </Route>
                    {
                        user.isAdmin && 
                            <Route exact path="/draw">
                                <Draw/>
                            </Route>
                    }
                    <Route exact path="/showresult">
                        <ShowResult />
                    </Route>
                </>
                :
                <>
                    <Route exact path="/">
                        <CreateAccount user={user}/>
                    </Route>
                </>
            ) 
            : (
            <>
                <Route exact path="/">
                    <Auth />
                </Route>
            </>
            )}
            </Switch>
        </Router>
    );
};
export default AppRouter;