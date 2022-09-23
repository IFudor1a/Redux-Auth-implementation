import {combineReducers} from "redux";
import counter from "./Counter";
import users from "./User";

export default combineReducers({
    counter,
    users
})