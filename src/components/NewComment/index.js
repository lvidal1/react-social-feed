import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const NewComment = () => {

    const [comment, setComment] = useState("");

    const MAX_LENGTH = 255;
    
    const handleChange = (event) => {
        const shouldSetValue = event.target.value.length <= MAX_LENGTH;
        if (shouldSetValue) setComment(event.target.value)
    }

    return <form className="w-full max-w-xl bg-white rounded-lg space-y-2">
        <div className="flex flex-wrap">
            <div className="w-full md:w-full">
                <TextareaAutosize
                    maxRows={5}
                    placeholder="Type Your Comment"
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-sm"
                    onChange={handleChange}
                    maxLength={MAX_LENGTH}
                />
            </div>
            <div className="w-full md:w-full flex justify-between md:w-full">
                <input type="submit" className="bg-white text-sm text-gray-700 font-medium py-1 px-3 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value="Post Comment" />
                <div>{comment.length}/{MAX_LENGTH}</div>
            </div>

        </div></form>;
}

export default NewComment;