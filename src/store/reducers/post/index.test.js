import { actions } from "../../actions/posts.actions";
import { actions as commentActions } from "../../actions/comments.actions";

import { allReducer, postByIdReducer, commentIdsByIdReducer } from ".";

import { $posts, $comments } from "../_mock";

describe('Post Reducer', () => {

    it('should resolve all posts to the state', () => {
        const posts = $posts;
        const action = { type: actions.GETALL_SUCCESS, posts }
        const resolve = allReducer([], action);

        expect(resolve.length).toBe(posts.length)
    });

    it('should resolve all posts mapped byId to the state', () => {
        const posts = $posts;
        const action = { type: actions.GETALL_SUCCESS, posts }
        const resolve = postByIdReducer({}, action);

        posts.map((p) => {
            expect(resolve[p.id]).toBeDefined()
            expect(resolve[p.id]).toMatchObject(p)
        })
    });

    it('should resolve all commentIds by postId mapped to the state', () => {
        const comments = $comments;
        const action = { type: commentActions.GETALL_SUCCESS, comments, postId:1 }
        const resolve = commentIdsByIdReducer({}, action);

        comments.map((p) => {
            const resolvedPostIds = new Set(resolve[p.postId]);
            const expectedPostIds = new Set(comments.filter(r => r.postId == p.postId).map((r) => r.id))

            expect(resolvedPostIds).toBeDefined()
            expect(resolvedPostIds).toEqual(expectedPostIds);
        })
    });

});