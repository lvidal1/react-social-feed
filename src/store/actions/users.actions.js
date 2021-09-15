import userService from "../services/users.service";

export const actions = {
  GETALL_REQUEST: "USERS_GETALL_REQUEST",
  GETALL_SUCCESS: "USERS_GETALL_SUCCESS",
  GETALL_FAILURE: "USERS_GETALL_FAILURE"
};

const getAll = (dispatch) => {
  dispatch({ type: actions.GETALL_REQUEST });

  userService.getAll().then(
    (users) => dispatch({ type: actions.GETALL_SUCCESS, users }),
    (error) => dispatch({ type: actions.GETALL_FAILURE, error })
  );
};

const userActions = {
  getAll
};

export default userActions;
