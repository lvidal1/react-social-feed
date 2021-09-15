import { useEffect } from "react";
import postActions from "../store/actions/posts.actions";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post";
import Hero from "../Hero";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    postActions.getAll(dispatch);
  }, []);

  return (
    <>
      <Hero />
      {posts.loading && <em>Loading posts...</em>}
      {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
      {posts.items &&
          <div className="space-y-2 p-8 items-center flex flex-col">
              {posts.items.map((post, index) =>
                  <Post key={post.id} post={post} />
              )}
          </div>
      }
    </>
  );
};

export default Feed;
