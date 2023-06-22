import React from 'react';
import * as userAuth from '../utils/userAuth';
import FormRegisterAndLogin from "./FormRegisterAndLogin";

const Login = ({onLogin, addInfoTooltipFalse, tokenCheck, email, password, setEmail, setPassword, navigate}) => {
    const handleSubmitAuthorizeForm = (e) => {
        e.preventDefault();
        userAuth.authorize(password, email).then(({token}) => {
            localStorage.setItem('jwt', token);
            tokenCheck();
            onLogin();
            navigate('/');
        }).catch((err) => {
            console.log(err, 'err')
            addInfoTooltipFalse()
        })
    }

    return (
        <FormRegisterAndLogin
            header='Вход'
            handleSubmitForm={handleSubmitAuthorizeForm}
            nameForm='login'
            autoComplete='on'
            nameButton='Войти'
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
        />
    );
}

export default Login;
