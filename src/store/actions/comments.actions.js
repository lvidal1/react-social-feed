import commentService from "../services/comments.service";

export const actions = {
  GETALL_REQUEST: "COMMENTS_GETALL_REQUEST",
  GETALL_SUCCESS: "COMMENTS_GETALL_SUCCESS",
  GETALL_FAILURE: "COMMENTS_GETALL_FAILURE"
};

const getComments = (dispatch, id) => {
  dispatch({ type: actions.GETALL_REQUEST });
  
  commentService.getCommentsByPostId(id).then(
    (comments) => dispatch({ type: actions.GETALL_SUCCESS, comments, postId: id }),
    (error) => dispatch({ type: actions.GETALL_FAILURE, error })
  );
};

const commentActions = {
  getComments
};

export default commentActions;
