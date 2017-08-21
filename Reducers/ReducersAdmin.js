import {
    Admin_INIT
} from '../Actions/ActionsAdmin'

export const ReducerAdmin = (state = {
    
}, action) => {
    switch (action.type) {
        case Admin_INIT:
            return {
                ...state
            }
        default:
            return state
    }
}
