const NewComment = () => {
    return <form className="w-full max-w-xl bg-white rounded-lg space-y-2">
        <div className="flex flex-wrap">
            <div className="w-full md:w-full">
                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-sm" name="body" placeholder="Type Your Comment" required=""></textarea>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full">
                <input type="submit" className="bg-white text-sm text-gray-700 font-medium py-1 px-3 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value="Post Comment" />
            </div>

        </div></form>;
}

export default NewComment;