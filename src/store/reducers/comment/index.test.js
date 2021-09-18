import { actions } from "../../actions/comments.actions";

import { allReducer, commentByIdReducer } from ".";

import { $comments } from "../_mock";

describe('Comment Reducer', () => {

    it('should resolve all comments to the state', () => {
        const comments = $comments;
        const action = { type: actions.GETALL_SUCCESS, comments }
        const resolve = allReducer([], action);

        expect(resolve.length).toBe(comments.length)
    });

    it('should resolve all comments mapped byId to the state', () => {
        const comments = $comments;
        const action = { type: actions.GETALL_SUCCESS, comments }
        const resolve = commentByIdReducer({}, action);

        comments.map((p) => {
            expect(resolve[p.id]).toBeDefined()
            expect(resolve[p.id]).toMatchObject(p)
        })
    });

});