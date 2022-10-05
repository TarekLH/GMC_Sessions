import * as ActionTypes from '../ActionsTypes'

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return true;
            
        case ActionTypes.SIGN_OUT:
            return false
        default:
            return state
    }
}

export default loggedReducer