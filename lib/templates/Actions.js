// @flow
import type { Dispatch } from 'redux'
import type { ActionType } from './index'
// @rgen-action

export type #####_INIT_TYPE = '#####_INIT'
export const #####_INIT: #####_INIT_TYPE = '#####_INIT'
export const #####Init = () => (dispatch: Dispatch<ActionType>, getState: any) => {
    dispatch({
        type: #####_INIT
    })
}

export type Action#####Type = #####_INIT_TYPE