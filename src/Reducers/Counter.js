import {INCREMENT_COUNT, DECREMENT_COUNT} from "../Actions/Counter";

const defaultState = {
    count: 0
}
export default function counter(state=defaultState,action){
    switch (action.type){
        case INCREMENT_COUNT:
            return {...state, count: state.count + action.payload}
        case DECREMENT_COUNT:
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}