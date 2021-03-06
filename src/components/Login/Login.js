import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validator';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';
import loginStyles from './Login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email',
                [required], Input)}
            {createField('Password', 'password',
                [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe',
                [], Input, {type: 'checkbox', text: 'remember me'})}

            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('Symbols from image', 'captcha',
                [required], Input)}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={loginStyles.button}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={loginStyles.login}>
        <h1>LOGIN</h1>
        <div className={loginStyles.info}>
            <p>For test this app, enter</p>
            <p>Login: <b>vl.bkmebel@bk.ru</b></p>
            <p>Password: <b>test_account</b></p>
            <p>or</p>
            <p>Login: <b>free@samuraijs.com</b></p>
            <p>Password: <b>free</b></p>
        </div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);