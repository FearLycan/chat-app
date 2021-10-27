import React from "react";
import {Link} from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <section className={'container'}>

                <div className="px-4 py-5 my-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="login-form bg-light mt-4 p-4">
                                <form action="" method="POST" className="row g-3">
                                    <h4 className={'text-center'}>Welcome Back</h4>
                                    <div className="col-12">
                                        <label>Username</label>
                                        <input type="text" name="username" className="form-control"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="col-12">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark float-end">Login</button>
                                    </div>
                                </form>
                                <hr className="mt-4"/>
                                <div className="col-12">
                                    <p className="text-center mb-0">Have not account yet?
                                        <Link to={'/sign-up'} className={'link ms-1'}>
                                            Sign-up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Login;