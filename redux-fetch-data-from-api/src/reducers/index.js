import { combineReducers } from "redux";
import UserReducer from './UserReducer'

const allReducers = combineReducers({
    users: UserReducer,
})

export default allReducers;