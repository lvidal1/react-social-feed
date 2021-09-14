import { actions } from "../actions/posts.actions";

export function posts(state = {}, action) {
  switch (action.type) {
    case actions.GETALL_REQUEST:
      return {
        loading: true
      };
    case actions.GETALL_SUCCESS:
      return {
        items: action.posts
      };
    case actions.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
