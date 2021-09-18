import { userAuthReducer } from ".";
import { actions } from "../../actions/auth.actions";

describe('Auth reducer', () => {

    it('should resolve new user info to the state on login', () => {
        const user = { email: "admin@admin.com", name: "John doe" }
        const action = { type : actions.LOGIN_SUCCESS, user };
        const resolve = userAuthReducer(null, action)

        expect(resolve).toMatchObject(user);
    });
});