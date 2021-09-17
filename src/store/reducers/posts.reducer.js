import { combineReducers } from 'redux';

import { actions } from "../actions/posts.actions";
import { actions as commentActions } from "../actions/comments.actions";

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
 * Map all array of posts
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const allReducer = (state = false, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS:
      const { posts } = action;
      return posts;
  }
  return state;
}

/**
 * Normalize all postId
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const postByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS: {
      const { posts } = action;

      let byId = posts.reduce((map, post) => ({ ...map, [post.id]: post }), {});
      return {
        ...state,
        ...byId
      };
    }
    case commentActions.GETALL_SUCCESS: {
      const { comments, postId } = action;

      const post = Object.assign(state[postId], { comments: [...(state[postId].comments ? state[postId].comments : []), ...comments] });
      let byId = Object.assign(state, { [postId]: post });

      return {
        ...state,
        ...byId
      };
    }

    case commentActions.ADD_SUCCESS: {
      const { comment, postId } = action;

      const post = Object.assign(state[postId], { comments: [comment, ...(state[postId].comments ? state[postId].comments : [])] });
      let byId = Object.assign(state, { [postId]: post });

      return {
        ...state,
        ...byId
      };
    }
  }
  return state;
}



export const postReducer = combineReducers({
  meta: metaReducer,
  all: allReducer,
  byId: postByIdReducer,
});