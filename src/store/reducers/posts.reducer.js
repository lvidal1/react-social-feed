import { combineReducers } from 'redux';

import { actions } from "../actions/posts.actions";

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
    case actions.GETALL_SUCCESS:
      const { posts } = action;

      const byId = posts.reduce((map, post) => ({ ...map, [post.id]: post }), {});
      return {
        ...state,
        ...byId
      };
  }
  return state;
}

export const postReducer = combineReducers({
  meta: metaReducer,
  all: allReducer,
  byId: postByIdReducer,
});


export function posts(
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
        byId: action.posts.reduce((map, post) => ({ ...map, [post.id]: post }), {}),
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
