import { combineReducers } from 'redux';

import { actions } from "../../actions/posts.actions";
import { actions as commentActions } from "../../actions/comments.actions";

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
    page: 0,
    count: 4
  }, action
) {
  switch (action.type) {
    case actions.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.GETALL_SUCCESS:
      const { page } = state;
      return {
        ...state,
        loading: false,
        page: (page + 1),
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
export const allReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS:
      const { posts } = action;
      return [
        ...new Set([ ...posts, ...state])
      ];
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
  }
  return state;
}

/**
 * Normalize all commentId by postId
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const commentIdsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case commentActions.GETALL_SUCCESS: {
      const { comments, postId } = action;
      // map new comments array
      let commentIdsByUserId = comments.reduce((map, comment) => ({
        // comment is an object
        ...map,
        // id post
        [comment.postId]:
          // exist on map
          map[comment.postId] ?
            // spread other comment ids & add current comment
            [...map[comment.postId], comment.id] :
            // elsewhere only add comment
            [comment.id],
      }),
        {}
      );

      // merge with existing array
      commentIdsByUserId[postId] = state[postId] ? [...new Set([...state[postId], ...commentIdsByUserId[postId]])] : [...commentIdsByUserId[postId]];

      return {
        ...state,
        ...commentIdsByUserId,
      };
    }

    case commentActions.ADD_SUCCESS: {
      const { comment, postId } = action;

      let newComment = { [postId]: state[postId] ? [comment.id, ...state[postId]] : [comment.id] }
      return {
        ...state,
        ...newComment,
      };
    }

    case commentActions.DELETE_SUCCESS: {
      const { comment } = action;
      const { postId } = comment;

      let syncComment = { [postId]: state[postId].filter(cId => cId != comment.id) }

      return {
        ...state,
        ...syncComment,
      };
    }
  }

  return state;
};



export const postReducer = combineReducers({
  meta: metaReducer,
  all: allReducer,
  byId: postByIdReducer,
  commentIdsById: commentIdsByIdReducer,
});