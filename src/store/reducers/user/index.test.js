import { actions as postActions } from "../../actions/posts.actions";
import { actions } from "../../actions/users.actions";
import { allReducer, userByIdReducer, postIdsByIdReducer } from ".";

import { $users, $posts } from "../_mock";

describe('User Reducer', () => {

    it('should resolve all users to the state', () => {
        const users = $users;
        const action = { type: actions.GETALL_SUCCESS, users }
        const resolve = allReducer([], action);

        expect(resolve.length).toBe(users.length)
    });

    it('should resolve all users mapped byId to the state', () => {
        const users = $users;
        const action = { type: actions.GETALL_SUCCESS, users }
        const resolve = userByIdReducer({}, action);

        users.map((u) => {
            expect(resolve[u.id]).toBeDefined()
            expect(resolve[u.id]).toMatchObject(u)
        })
    });

    it('should resolve all postIds by userId mapped to the state', () => {
        const posts = $posts;
        const action = { type: postActions.GETALL_SUCCESS, posts }
        const resolve = postIdsByIdReducer({}, action);

        posts.map((p) => {
            const resolvedPostIds = new Set(resolve[p.userId]);
            const expectedPostIds = new Set(posts.filter(r => r.userId == p.userId).map((r) => r.id))

            expect(resolvedPostIds).toBeDefined()
            expect(resolvedPostIds).toEqual(expectedPostIds);
        })
    });
});