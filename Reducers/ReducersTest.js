import {
    Test_INIT
} from '../Actions/ActionsTest'

export const ReducerTest = (state = {
    
}, action) => {
    switch (action.type) {
        case Test_INIT:
            return {
                ...state
            }
        default:
            return state
    }
}
