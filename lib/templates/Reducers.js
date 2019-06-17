// @flow

import {
    // @rgen-import    
} from '../Actions/Action#####'

import type {
    Action#####Type,
} from '../Actions/Action#####'
import type { Action } from 'redux'

export type State = {

}

let initialState: State = {

}

export type IReducer##### = (state: State, action: Action<Action#####Type>) => State
export const Reducer##### = (state: State = initialState, action: Action<Action#####Type>) => {
    switch (action.type) {
        // @rgen-case
        default:
            return state
    }
}
