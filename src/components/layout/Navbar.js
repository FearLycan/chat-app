import React from "react";

import {NavLink} from "react-router-dom";
import Auth from "../../services/auth";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        Auth.logout();
        window.location.href = '/login';
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <strong>Chat App</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">

                                <NavLink exact to="/" className={'nav-link'} activeClassName={'active'}
                                         isActive={(match, location) => {
                                             return location.pathname === '/';
                                         }}>
                                    Home
                                </NavLink>
                            </div>
                        </div>
                        <div className="text-end">
                            {this.props.user ? (
                                <>
                                    <NavLink exact to="/login" className={'btn btn-outline-light'}
                                             activeClassName={'active'} onClick={this.logOut}>
                                        Logout
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink exact to="/login" className={'btn btn-outline-light me-2'}
                                             activeClassName={'active'}>
                                        Login
                                    </NavLink>

                                    <NavLink exact to="/sign-up" className={'btn btn-warning'}
                                             activeClassName={'active'}>
                                        Sign-up
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;