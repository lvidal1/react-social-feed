import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import userActions from "../../store/actions/users.actions";
import Avatar from "../Avatar";

const Comunity = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        userActions.getAll(dispatch);
    }, []);

    return (
        <>
            <h2 className="text-2xl font-semibold">Comunity</h2>
            {users.loading && <em>Loading comunity...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <div className="grid md:grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 p-4 ">
                    {users.items.map((user) =>
                        <Avatar key={user.id} user={user} />
                    )}
                </div>
            }
        </>
    );
};

export default Comunity;
