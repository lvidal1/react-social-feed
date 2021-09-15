import { actions } from "../actions/users.actions";

export function users(
  state = {
    loading: false,
    items: [],
    error: null
  },
  action
) {
  switch (action.type) {
    case actions.GETALL_REQUEST:
      return {
        loading: true
      };
    case actions.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case actions.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
