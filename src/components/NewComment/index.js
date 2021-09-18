import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import V from 'max-validator';
import TextareaAutosize from 'react-textarea-autosize';

import commentActions from '../../store/actions/comments.actions';

const MAX_LENGTH = 255;

const registerFormScheme = {
    comment: `required|min:1|max:${MAX_LENGTH}`
};

const NewComment = ({ postId }) => {
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.posts.commentIdsById[postId]);
    const [adding, setAdding] = useState(false);
    
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: V.getEmpty(),
    });

    useEffect(() => {
        if(adding){
            setAdding(false)
            updateFormValue("comment","");
        }
    }, [comments]);

    useEffect(() => {
        const errors = V.validate(formState.values, registerFormScheme);

        setFormState((formState) => ({
            ...formState,
            isValid: !errors.hasError,
            errors,
        }));
    }, [formState.values]);

    const updateFormValue = (field, value) => {
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [field]: value,
            },
            touched: {
                ...formState.touched,
                [field]: true,
            },
        }));
    }

    const handleChange = (event) => {
        event.persist();
        updateFormValue(event.target.name, event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formState.isValid) {
            const { comment } = formState.values;
            commentActions.addComment(dispatch, postId, comment);
            setAdding(true)
        }
    };

    return <form className="w-full max-w-xl bg-white rounded-lg space-y-2">
        <div className="flex flex-wrap">
            <div className="w-full md:w-full">
                <TextareaAutosize
                    maxRows={5}
                    placeholder="Type Your Comment"
                    className="bg-gray-100 rounded border border-gray-100 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-sm"
                    onChange={handleChange}
                    name="comment"
                    value={formState.values.comment}
                />
            </div>
            <div className="w-full md:w-full flex justify-between md:w-full">
                <button className={`bg-white text-sm font-medium py-1 px-3 rounded tracking-wide mr-1  
                ${!formState.isValid ? "bg-purple-300 cursor-not-allowed text-white" : "bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 text-white"}`} disabled={!formState.isValid} onClick={handleSubmit}>Post Comment</button>
                <div className="text-xs text-gray-400">{formState.values.comment ? formState.values.comment.length : 0}/{MAX_LENGTH}</div>

            </div>
            {/* {JSON.stringify(formState)} */}

        </div></form>;
}

export default NewComment;