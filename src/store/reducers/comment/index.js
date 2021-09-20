import { combineReducers } from 'redux';
import { removeKey } from '../../../helpers';

import { actions } from "../../actions/comments.actions";



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
 * Map all array of comments
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const allReducer = (state = false, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS:
      const { comments } = action;
      return comments;
  }
  return state;
}

/**
 * Normalize all commentId
 * 
 * @param {object} state 
 * @param {string} action 
 * @returns object state
 */
export const commentByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GETALL_SUCCESS: {
      const { comments } = action;

      let byId = comments.reduce((map, comment) => ({ ...map, [comment.id]: comment }), {});
      return {
        ...state,
        ...byId
      };
    }
    case actions.ADD_SUCCESS: {
      const { comment } = action;

      let newComment = { [comment.id]: comment }
      return {
        ...state,
        ...newComment,
      };
    }
    case actions.DELETE_SUCCESS: {
      const { comment } = action;     
      return removeKey(comment.id, state);
    }
  }
  return state;
}


export const commentReducer = combineReducers({
  meta: metaReducer,
  all: allReducer,
  byId: commentByIdReducer,
});