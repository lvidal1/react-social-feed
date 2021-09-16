import Author from "../Author";

const Post = ({post}) => {

    return <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
      <Author userId={post.userId} createdAt={post.created_at.toLocaleString()} />
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.title}</p>
      <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.body}</p>
      <div className="flex justify-between items-center mt-5">
      {/* <div className="flex ">
        
        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">8</span>
      </div>   */}
      <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
      </div>
    </div>;
}
 
export default Post;