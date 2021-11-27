import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Dashboard } from '../pages/dashboard';
import { Register } from '../pages/register'

export const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/register" element={<Register />}/>
        </Switch>
    );
};