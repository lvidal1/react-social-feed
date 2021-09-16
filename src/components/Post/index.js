import Author from "../Author";
import Comments from "../Comments";

const Post = ({post}) => {

    return <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
      <Author userId={post.userId} createdAt={post.created_at.toLocaleString()} />
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.title}</p>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.body}</p>
      <div className="flex justify-between items-center mt-5">
      <Comments postId={post.id} />
      </div>
    </div>;
}
 
export default Post;