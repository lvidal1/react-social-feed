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
      {posts.loading && <em>Loading posts...</em>}
      {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
      {posts.items &&
          <ul>
              {posts.items.map((post, index) =>
                  <li key={post.id}>
                      {post.title + ' > '}
                  </li>
              )}
          </ul>
      }
    </>
  );
};

export default Feed;
