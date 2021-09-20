import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import commentActions from "../../store/actions/comments.actions";
import NewComment from "../NewComment";
import DeleteButton from "./DeleteButton";

const Comments = ({ postId }) => {
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.posts.commentIdsById[postId]);
    const commentsById = useSelector((state) => state.comments.byId);

    const [loading, setLoading] = useState(false);

    const loadComments = () => {
        setLoading(true)
        commentActions.getComments(dispatch, postId);
    }

    useEffect(() => {
        setLoading(false)
    }, [comments]);

    return (
        <div className="space-y-2 w-full">
            <NewComment postId={postId} />
            <hr />
            {comments &&
                <div className="text-xs space-y-2">
                    <h4 className="uppercase tracking-wide text-gray-400 font-bold text-xs">Comments</h4>
                    <div className="space-y-4">
                        {comments.map((id) => {
                            const comment = commentsById[id];
                            return (comment && <div className="flex" key={comment.id}>
                                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed relative">
                                    <DeleteButton comment={comment}/>
                                    <strong>{comment.email}</strong>
                                    <p className="text-xs sm:text-sm">
                                        {comment.body}
                                    </p>
                                </div>
                            </div>)
                        }
                        )}
                    </div>
                </div>
            }
            {loading ? <div className="relative w-full bg-gray-200 rounded">
                <div className="absolute top-0 h-1 rounded shim-progress w-full"></div>
            </div> : <a href="#!" className="inline-block cursor-pointer uppercase tracking-wide text-gray-400 font-semibold text-xs underline" onClick={() => loadComments(postId)}>Load Comments</a>}

        </div>
    );
}

export default Comments;