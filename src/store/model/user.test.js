import { User } from "./user";

describe('New user', () =>{

    it('should set the correct name', ()=>{
        const user = new User()
        user.setName("John Doe");
        expect(user.getName()).toBe("John Doe")
    })
})