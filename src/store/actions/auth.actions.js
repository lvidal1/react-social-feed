export const actions = {
    LOGIN_SUCCESS : "AUTH_LOGIN_SUCCESS",
    LOGOUT_SUCCESS : "AUTH_LOGOUT_SUCCESS",
}

const login = (dispatch, user ) => {
    dispatch({type: actions.LOGIN_SUCCESS, user: {...user, id: +new Date()}} )
}

const logout = (dispatch ) => {
    dispatch({type: actions.LOGOUT_SUCCESS }  )
}

const authActions = {
    login,
    logout
}

export default authActions;