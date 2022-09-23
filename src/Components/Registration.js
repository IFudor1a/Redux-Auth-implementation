import React, {useState} from 'react';
import '../Styles/Auth.css'
import {useDispatch} from "react-redux";
import {accountFormer} from "../Utils/Utils";
import {checkValid} from "../Actions/User";
import {useNavigate} from 'react-router-dom';

export const Error = () => {
    return (
        <div>Error</div>
    )
}
const Registration = ({isReg}) => {
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== rePassword) {
            return (alert('Passwords is not equal'))
        }
        const user = accountFormer(name, surname, email, password);
        dispatch(checkValid(user));
        setName('');
        setSurName('');
        setEmail('');
        setRePassword('');
        setPassword('');
        navigate('/')
    }
    return (
        <div className='Login'>
            <h3>REGISTRATION</h3>
            <input placeholder='Name...' value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder='Surname...' value={surname} onChange={(e) => setSurName(e.target.value)}/>
            <input placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input placeholder='Re-password...' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>
                {
                    'REGISTRATION'
                }
            </button>
            <a onClick={() => isReg(true)}>Already have an account? Login</a>
        </div>
    );
};

export default Registration;