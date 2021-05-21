import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';

const LoginForm = (props) => {
    console.log(props.captchaUrl)

    return  <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} />}
                {props.captchaUrl && <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} validate={[required]} />}
                {props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Please, log in</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login}) (Login);