import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import { Styled } from './styles';

export default function Routes() {
    return (
        <Styled.AppLayout>
            <NavBar />
            <Styled.PageLayout>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Redirect from="*" to={NotFound} />
                </Switch>
            </Styled.PageLayout>
        </Styled.AppLayout>
    )
}
