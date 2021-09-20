import { useDispatch, useSelector } from "react-redux";
import commentActions from "../../../store/actions/comments.actions";

const DeleteButton = ({comment}) => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const onDelete = (comment) => {
        commentActions.deleteComment(dispatch, comment);
    }
    return <>
        {auth.user &&
            <>
                {auth.user.id == comment.userId && <a href="#!" className="absolute top-0 right-0 mx-3 my-2  text-xs text-purple-600" onClick={() => onDelete(comment)}>Delete</a>}
            </>
        }
    </>;
}

export default DeleteButton;