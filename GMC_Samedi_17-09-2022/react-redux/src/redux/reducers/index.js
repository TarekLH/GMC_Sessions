import countReducer from "./counter";
import loggedReducer from "./logged"
import { combineReducers} from 'redux'

const allReducers = combineReducers({
    countReducer, //countReducer: countReducer
    loggedReducer
})

export default allReducers