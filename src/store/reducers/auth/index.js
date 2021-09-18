import { combineReducers } from "redux";
import { actions } from "../../actions/auth.actions";


export const userAuthReducer = (state = null, action) => {

    switch (action.type) {
        case actions.LOGIN_SUCCESS: {
            const { user } = action;
            return {
                ...state,
                ...user
            }
        }
    }

    return state;
}

export const authReducer = combineReducers({
    user: userAuthReducer
})