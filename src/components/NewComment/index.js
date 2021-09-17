import React, { useState, useEffect } from 'react';
import V from 'max-validator';
import TextareaAutosize from 'react-textarea-autosize';

const MAX_LENGTH = 255;

const registerFormScheme = {
    comment: `required|min:1|max:${MAX_LENGTH}`
};

const NewComment = () => {

    const [comment, setComment] = useState("");

    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: V.getEmpty(),
    });

    useEffect(() => {
        const errors = V.validate(formState.values, registerFormScheme);

        setFormState((formState) => ({
            ...formState,
            isValid: !errors.hasError,
            errors,
        }));
    }, [formState.values]);

    const handleChange = (event) => {
        event.persist();

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(formState.isValid){
            console.log(formState.values.comment);
        }
    };

    // const handleChange = (event) => {
    //     const shouldSetValue = event.target.value.length <= MAX_LENGTH;
    //     if (shouldSetValue) setComment(event.target.value)
    // }

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
                <button className={`bg-white text-sm font-medium py-1 px-3 rounded tracking-wide mr-1 hover:bg-gray-100 
                ${!formState.isValid ? "bg-purple-300 cursor-not-allowed text-white" : "bg-purple-600 text-white"}`}  disabled={!formState.isValid} onClick={handleSubmit}>Post Comment</button>
                <div>{ formState.values.comment ? formState.values.comment.length : 0}/{MAX_LENGTH}</div>
                
            </div>
            {/* {JSON.stringify(formState)} */}

        </div></form>;
}

export default NewComment;