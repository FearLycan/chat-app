import React from "react";
import Form from "./_sing-up-form";

class SignUp extends React.Component {
    render() {
        return (
            <section className={'container'}>

                <div className="px-4 py-5 my-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <Form/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default SignUp;