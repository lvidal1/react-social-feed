import { actions as postActions} from "../../actions/posts.actions";
import { actions } from "../../actions/users.actions";
import { allReducer, userByIdReducer, postIdsByIdReducer } from ".";

const $users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
]

const $posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
]

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

    it('should resolve all postId mapped userId to the state', () => {
        const posts = $posts;
        const action = { type: postActions.GETALL_SUCCESS, posts }
        const resolve = postIdsByIdReducer({}, action);
       
        posts.map((p) => {
            const resolvedPostIds = new Set(resolve[p.userId]);
            const expectedPostIds = new Set(posts.filter(r => r.userId == p.userId).map((r)=> r.id))

            expect(resolvedPostIds).toBeDefined()
            expect(resolvedPostIds).toEqual(expectedPostIds);
        })
    });
});