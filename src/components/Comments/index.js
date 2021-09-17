import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import commentActions from "../../store/actions/comments.actions";
import NewComment from "../NewComment";

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.posts.byId[postId]);

    const [loadComments, setLoadComments] = useState(false);

    const openComments = () => {
      setLoadComments(true);
    }

    useEffect(() => {
        if(loadComments){
            commentActions.getComments(dispatch, postId);
        }
    }, [loadComments]);

    return (
        <div className="space-y-2 w-full">
            <NewComment />
            <hr />
            {!loadComments && <a href="#!" className="inline-block cursor-pointer uppercase tracking-wide text-gray-400 font-bold text-xs" onClick={()=>openComments(post.id)}>Load Comments</a>}
            { loadComments && ( !post.comments && <em>Loading...</em> ) }
            { loadComments && post.comments &&
                <div className="text-xs">
                    <h4 className="uppercase tracking-wide text-gray-400 font-bold text-xs">Comments</h4>
                    <div className="space-y-4">
                        {post.comments.map((comment) => (<div className="flex" key={comment.id}>
                            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>{comment.email}</strong>
                                <p className="text-xs sm:text-sm">
                                    {comment.body}
                                </p>
                            </div>
                        </div>))}
                    </div>
                </div> 
            }
        </div>
    );
}

export default Comments;