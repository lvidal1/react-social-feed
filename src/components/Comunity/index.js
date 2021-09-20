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
      <h2 className="font-semibold text-xl text-gray-600 mb-4 md:mb-6">
        Our comunity
      </h2>
      {users.meta.loading && (
        <>
          <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
          <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
          <ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
        </>
      )}
      {users.meta.error && (
        <span className="text-danger">ERROR: {users.meta.error}</span>
      )}
      {users.all && (
        <div className="flex flex-wrap justify-center md:p-4 mb-6">
          {users.all.map((user) => (
            <div className="m-1 sm:m-2 md:m-2 w-24">
              <Avatar key={user.id} user={user} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comunity;
