import React from "react";
import Form from "./_login-form";

class Login extends React.Component {
    render() {
        return (
            <section className={'container'}>

                <div className="px-4 py-5 my-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <Form/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Login;