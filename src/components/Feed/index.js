import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerPostItem } from "react-shimmer-effects";

import postActions from "../../store/actions/posts.actions";

import Post from "../Post";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { page, count } = useSelector((state) => state.posts.meta);

  const onLoadMorePosts = () => {
    postActions.getAll(dispatch, page, count);
  }

  useEffect(() => {
    postActions.getAll(dispatch, page, count);
  }, []);

  return (
    <div className="max-w-lg mx-auto" id="feed">
      <h2 className="font-semibold text-xl text-gray-600 mb-4 md:mb-6">Latest posts</h2>
      {
        !posts.meta.loading &&
          <div className="text-center text-purple-600 font-semibold text-black underline my-4">
            <a href="#!" onClick={onLoadMorePosts} >Load ({`${count}`}) posts more</a>
          </div>
      }
      {posts.meta.loading && <div className="max-w-lg mx-auto"><ShimmerPostItem
        card
        title
        cta
        imageType="thumbnail"
        imageWidth={80}
        imageHeight={80}
        contentCenter
      /></div>}
      {posts.all &&
        <div className="space-y-2 items-center flex flex-col">
          {posts.all.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      }
      {posts.meta.error && <span className="text-danger">ERROR: {posts.meta.error}</span>}

    </div>
  );
};

export default Feed;
