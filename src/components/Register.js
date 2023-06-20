import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as userAuth from '../utils/userAuth'

const Register = ({addInfoTooltipFalse, addInfoTooltipSucces}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmitRegisterForm = (event) => {
        event.preventDefault();
        console.log('handleSubmitRegisterForm')
        userAuth.register(password, email).then((data) => {
            addInfoTooltipSucces();
            navigate('/sign-in');
        }).catch(() => addInfoTooltipFalse())
    }

    return (
        <div className="register">
            <div className='register__wrapper'>
                <p className="register__welcome">
                    Регистрация
                </p>
                <form onSubmit={handleSubmitRegisterForm} className="register__form">
                    <input
                        className='register__input'
                        placeholder="Email"
                        id="useremail"
                        name="useremail"
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        autoComplete="off"
                        required/>
                    <input
                        className='register__input'
                        placeholder="Пароль"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                        autoComplete="off"
                        required/>
                    <button
                        type="submit"
                        className="register__button">
                        Зарегистрироваться
                    </button>
                </form>
                <div className="register__signin">
                    <p className='register__question'>Уже зарегистрированы?</p>
                    <Link to="/sign-in" className="register__login-link">Войти</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
