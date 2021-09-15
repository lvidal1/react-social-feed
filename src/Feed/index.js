import { useEffect } from "react";
import postActions from "../store/actions/posts.actions";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    postActions.getAll(dispatch);
  }, []);

  return (
    <>
      <h1>Feed</h1>
    </>
  );
};

export default Feed;
