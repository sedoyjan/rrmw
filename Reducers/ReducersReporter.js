import {
    Reporter_INIT
} from '../Actions/ActionsReporter'

export const ReducerReporter = (state = {
    
}, action) => {
    switch (action.type) {
        case Reporter_INIT:
            return {
                ...state
            }
        default:
            return state
    }
}
