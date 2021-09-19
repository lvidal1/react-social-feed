import { combineReducers } from "redux";
import { actions } from "../../actions/ui.actions";

export const modalReducer = (state = {
    login: false
}, action) => {

    switch (action.type) {
        case actions.UI_OPEN_LOGIN_MODAL: {
            const modal = { login: true }
            return {
                ...state,
                ...modal
            }
        }
        case actions.UI_CLOSE_LOGIN_MODAL: {
            const login = { login: false }
            return {
                ...state,
                ...login
            }
        }
    }

    return state;
}

export const uiReducer = combineReducers({
    modal: modalReducer
})