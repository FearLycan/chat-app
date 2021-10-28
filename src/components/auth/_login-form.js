import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Form = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <h4 className={'text-center'}>Welcome Back</h4>
                <div className="col-12">
                    <label htmlFor={'email'}>E-mail</label>
                    <input {...register("email", {
                        required: {value: true, message: 'This field is required'},
                        minLength: {value: 4, message: 'This field should contain at least 4 characters'},
                        maxLength: {value: 40, message: 'Maximum length is 40 characters'},
                        pattern: {
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid email address'
                        }
                    })} type="text" id={'email'} className="form-control" placeholder="E-mail"/>
                    {errors.email?.type && <div className="error-validation">{errors.email.message}</div>}
                </div>
                <div className="col-12">
                    <label htmlFor={'password'}>Password</label>
                    <input {...register("password", {
                        required: {value: true, message: 'This field is required'},
                        minLength: {value: 8, message: 'This field should contain at least 8 characters'},
                        maxLength: {value: 40, message: 'Maximum length is 40 characters'},
                    })} type="password" id={'password'} className="form-control" placeholder="Password"/>
                    {errors.password?.type && <div className="error-validation">{errors.password.message}</div>}
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" name={'rememberMe'} type="checkbox"
                               id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-dark float-end">Login</button>
                </div>
            </form>
            <hr className="mt-4"/>
            <div className="col-12 text-center ">
                <small className="mb-0">Have not account yet?
                    <Link to={'/sign-up'} className={'link ms-1'}>
                        Sign-up
                    </Link>
                </small>
            </div>
        </div>
    )
}

export default Form;