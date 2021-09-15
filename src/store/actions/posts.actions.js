import postService from "../services/posts.service";

export const actions = {
  GETALL_REQUEST: "POSTS_GETALL_REQUEST",
  GETALL_SUCCESS: "POSTS_GETALL_SUCCESS",
  GETALL_FAILURE: "POSTS_GETALL_FAILURE"
};

const getAll = (dispatch) => {
  dispatch({ type: actions.GETALL_REQUEST });

  postService.getAll().then(
    (posts) => dispatch({ type: actions.GETALL_SUCCESS, posts }),
    (error) => dispatch({ type: actions.GETALL_FAILURE, error })
  );
};

const postActions = {
  getAll
};

export default postActions;
