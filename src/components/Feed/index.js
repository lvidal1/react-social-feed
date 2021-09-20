import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import postActions from "../../store/actions/posts.actions";

import Post from "../Post";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const {page, count} = useSelector((state) => state.posts.meta);

  useEffect(() => {
    postActions.getAll(dispatch, page, count);
  }, []);

  const onLoadMorePosts = () =>{
    postActions.getAll(dispatch, page, count);
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">Feed</h2>
      {posts.meta.loading && <em>Loading posts...</em>}
      {posts.meta.error && <span className="text-danger">ERROR: {posts.meta.error}</span>}
      {posts.all &&
        <div className="space-y-2 p-4 items-center flex flex-col">
          {posts.all.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      }
      {<a href="#!" onClick={onLoadMorePosts} >Load more posts</a>}
    </>
  );
};

export default Feed;
