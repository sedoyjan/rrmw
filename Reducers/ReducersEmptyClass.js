import {
    EmptyClass_INIT
} from '../Actions/ActionsEmptyClass'

export const ReducerEmptyClass = (state = {
    
}, action) => {
    switch (action.type) {
        case EmptyClass_INIT:
            return {
                ...state
            }
        default:
            return state
    }
}
