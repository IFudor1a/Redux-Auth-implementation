import {LOG_OUT, LOGIN, RECEIVE_ALL_USERS, REGISTRATION} from "../Actions/User";


export default function users(state ={}, action) {
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return {
                ...state,
                ...action.users
            }
        case LOGIN:
            const key = Object.keys(action.user)[0];
            return {
                ...state,
                [key]: {
                    ...action.user,
                    Access: true
                }

            }
        case REGISTRATION:
            return {
                ...state,
                [action.user.id]: {...action.user}
            }
        case LOG_OUT:
            return {
                 ...state,
                [Object.keys(action.user)[0]]: {
                     ...action.user,
                    Access: false
                }
        }
        default:
            return state
    }
}