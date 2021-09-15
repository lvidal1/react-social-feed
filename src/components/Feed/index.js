import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import postActions from "../../store/actions/posts.actions";

import Post from "../Post";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    postActions.getAll(dispatch);
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold">Feed</h2>
      {posts.loading && <em>Loading posts...</em>}
      {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
      {posts.items &&
        <div className="space-y-2 p-4 items-center flex flex-col">
          {posts.items.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      }
    </>
  );
};

export default Feed;
