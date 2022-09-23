import {_getUsers, saveUser} from "../Utils/Utils";

export const LOGIN = 'LOGIN';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const REGISTRATION = 'REGISTRATION';
export const LOG_OUT = 'LOG_OUT';

export function receiveUsers (users) {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}
export function login (user) {
    return {
        type: LOGIN,
        user
    }
}

export function logOut (user) {
    return {
        type: LOG_OUT,
        user
    }
}

export function registration (user) {
    return {
        type: REGISTRATION,
        user

    }
}

export function checkCredentials (email, password) {
    return (dispatch, getState) => {
        const {users} = getState();
        const accounts = Object.values(users);
        const user = accounts.filter(user => user.email === email && user.password === password);
        if(user[0] === undefined) return alert('Wrong Credentials')
        else if (user.length === 1 && user[0].email === email && user[0].password === password) {
            dispatch(login(user));
            console.log('Access success')
        }
        else{
            return alert('Wrong Credentials')
        }
    }
}
export function checkValid (candidate) {
    return (dispatch, getState) => {
        const {users} = getState();
        const accounts = Object.values(users);
        const user = accounts.filter(user => user.email === candidate.email );
        if (user.length === 0) {
            return saveUser(candidate)
                .then(() => {
                        dispatch(registration(candidate))
                    console.log('Reg success')
                    }
                )
        }
        else {
            return alert('Wrong credentials!')
        }
    }
}
export function handleInitialData () {
    return (dispatch) => {
        return _getUsers()
            .then(users => {
                dispatch(receiveUsers(users))
            })
    }
}