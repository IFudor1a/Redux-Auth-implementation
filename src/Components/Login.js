import React, {useState} from 'react';
import '../Styles/Auth.css'
import {useDispatch} from "react-redux";
import {checkCredentials} from "../Actions/User";
import {useNavigate} from 'react-router-dom';

const Login = ({isReg}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkCredentials(email, password))
        setPassword('');
        setEmail('');
        navigate('/')
    }
    return (
        <div className='Login'>
            <h3>LOGIN</h3>
            <input placeholder='Login...' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>
                {
                    'LOGIN'
                }
            </button>
            <a onClick={() => isReg(false)}>Don't have an account? Create one</a>
        </div>
    );
};

export default Login;