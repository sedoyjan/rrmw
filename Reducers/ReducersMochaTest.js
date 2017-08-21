import {
    MochaTest_INIT
} from '../Actions/ActionsMochaTest'

export const ReducerMochaTest = (state = {
    
}, action) => {
    switch (action.type) {
        case MochaTest_INIT:
            return {
                ...state
            }
        default:
            return state
    }
}
