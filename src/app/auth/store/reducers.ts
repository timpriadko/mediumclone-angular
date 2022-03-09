import { Action, createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'
import {
    registerAction,
    registerFailureAction,
    registerSuccesAction,
} from './actions/register.action'

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
}

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })
    ),
    on(
        registerSuccesAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
            validationErrors: null,
        })
    ),
    on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    )
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}
