import postService from "../services/posts.service";

export const actions = {
  GETALL_REQUEST: "POSTS_GETALL_REQUEST",
  GETALL_SUCCESS: "POSTS_GETALL_SUCCESS",
  GETALL_FAILURE: "POSTS_GETALL_FAILURE"
};

const mockPagination = (items, page, count) => {
  const from = page * count;
  const to = from + count;
  return items.slice(from, to);
}

const getAll = (dispatch, page, count) => {
  dispatch({ type: actions.GETALL_REQUEST });

  postService.getAll().then(
    (posts) => {
      console.log(mockPagination(posts, page, count))
      return dispatch({ type: actions.GETALL_SUCCESS, posts: mockPagination(posts, page, count) });
    },
    (error) => dispatch({ type: actions.GETALL_FAILURE, error })
  );
};

const postActions = {
  getAll
};

export default postActions;
