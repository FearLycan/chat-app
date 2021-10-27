import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

function App() {
    return (
        <Router>
            <Navbar/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/sign-up">
                    <SignUp/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
