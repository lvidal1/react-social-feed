import { combineReducers } from 'redux';

import { actions } from "../../actions/users.actions";
import { actions as postActions } from "../../actions/posts.actions";

/**
 * Map metadata
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
function metaReducer(
  state = {
    loading: false,
    error: null,
  }, action
) {
  switch (action.type) {
    case actions.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.GETALL_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actions.GETALL_FAILURE:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}

/**
 * Map all array of users
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const allReducer = (state = false, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS:
      const { users } = action;
      return users;
  }

  return state;
}

/**
 * Normalize all userId
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const userByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS:
      const { users } = action;

      const byId = users.reduce((map, user) => ({ ...map, [user.id]: user }), {});
      return {
        ...state,
        ...byId
      };
  }
  return state;
}

/**
 * Normalize all postId by userId
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const postIdsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case postActions.GETALL_SUCCESS:
      const { posts } = action;
      // posts array
      let postIdsByUserId = posts.reduce((map, post) => ({
        // post is an object
        ...map,
        // id user
        [post.userId]:
          // exist on map
          map[post.userId] ?
            // spread other post ids & add current post
            [...map[post.userId], post.id] :
            // elsewhere only add post
            [post.id],
      }),
        {}
      );

      return {
        ...state,
        ...postIdsByUserId,
      };
  }

  return state;
};

export const userReducer = combineReducers({
  meta: metaReducer,
  all: allReducer,
  byId: userByIdReducer,
  postIdsById: postIdsByIdReducer,
});