export const actions = {
    LOGIN_SUCCESS : "AUTH_LOGIN_REQUEST"
}

const login = (dispatch, user ) => {
    dispatch({type: actions.LOGIN_SUCCESS, user: {...user, id: +new Date()}} )
}

const authActions = {
    login
}

export default authActions;