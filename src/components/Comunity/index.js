import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

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
            <h2 className="font-semibold text-xl text-gray-600 mb-4 md:mb-6">Our comunity</h2>
            {users.meta.loading && <>
                <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
                <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
                <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
            </>}
            {users.meta.error && <span className="text-danger">ERROR: {users.meta.error}</span>}
            {users.all &&
                <div className="grid md:grid-cols-6 grid-cols-4 gap-2 md:gap-4 md:p-4 mb-6">
                    {users.all.map((user) =>
                        <Avatar key={user.id} user={user} />
                    )}
                </div>
            }
        </>
    );
};

export default Comunity;
