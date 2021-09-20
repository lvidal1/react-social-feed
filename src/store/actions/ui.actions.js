export const actions = {
    UI_OPEN_LOGIN_MODAL : "UI_OPEN_LOGIN_MODAL",
    UI_CLOSE_LOGIN_MODAL : "UI_CLOSE_LOGIN_MODAL",
}

const openLoginModal = (dispatch ) => {
    dispatch({type: actions.UI_OPEN_LOGIN_MODAL})
}

const closeLoginModal = (dispatch ) => {
    dispatch({type: actions.UI_CLOSE_LOGIN_MODAL})
}


const uiActions = {
    openLoginModal,
    closeLoginModal
}

export default uiActions;