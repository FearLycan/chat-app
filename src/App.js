import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Auth from "./services/auth";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = Auth.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
            });
        }
    }

    logOut() {
        Auth.logout();
    }


    render() {
        const {currentUser} = this.state;

        return (
            <Router>
                <Navbar user={currentUser}/>

                <Switch>
                    <Route exact path="/">
                        <Home user={currentUser}/>
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
}

export default App;
