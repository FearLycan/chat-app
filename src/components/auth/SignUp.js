import React from "react";
import {Link} from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (
            <section className={'container'}>

                <div className="px-4 py-5 my-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-form bg-light mt-4 p-4">
                                <form action="" method="POST" className="row g-3">
                                    <h4 className={'text-center'}>Welcome</h4>
                                    <div className="col-6">
                                        <label htmlFor={'username'}>Username</label>
                                        <input type="text" name="username" id={'username'} className="form-control"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor={'email'}>Email</label>
                                        <input type="text" name="email" id={'email'} className="form-control"
                                               placeholder="E-mail"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor={'password'}>Password</label>
                                        <input type="password" name="password" id={'password'} className="form-control"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor={'repeat-password'}>Repeat Password</label>
                                        <input type="password" name="repeat-password" id={'repeat-password'} className="form-control"
                                               placeholder="Repeat Password"/>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark float-end">Sing Up</button>
                                    </div>
                                </form>
                                <hr className="mt-4"/>
                                <div className="col-12">
                                    <p className="text-center mb-0">Do you have account?
                                        <Link to={'/login'} className={'link ms-1'}>
                                            Login
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

export default SignUp;