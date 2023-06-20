import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as userAuth from '../utils/userAuth';

const Register = ({onLogin, addInfoTooltipFalse}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmitAuthorizeForm = (e) => {
        e.preventDefault();
        userAuth.authorize(password, email).then(({token}) => {
            localStorage.setItem('jwt', token);
            onLogin();
            navigate('/');
        }).catch(() => addInfoTooltipFalse())
    }

    return (
        <div className="register">
            <div className='register__wrapper'>
                <p className="register__welcome">
                    Вход
                </p>
                <form onSubmit={handleSubmitAuthorizeForm} className="register__form">
                    <input
                        className='register__input'
                        placeholder="Email"
                        id="useremail"
                        name="useremail"
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        autoComplete="on"
                        required/>
                    <input
                        className='register__input'
                        placeholder="Пароль"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        autoComplete="on"
                        onChange={handleChangePassword}
                        required/>
                    <button
                        type="submit"
                        className="register__button">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
