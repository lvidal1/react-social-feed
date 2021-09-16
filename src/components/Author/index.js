import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Author = ({ userId , createdAt }) => {

    const [author, setAuthor] = useState(null);
    const byId = useSelector((state) => state.users.byId);

    useEffect(() => {
        const user = byId[userId];
        if(user){
            setAuthor(user)
        }
    }, [byId]);

    return (<>
        {author && <div className="flex mb-4">
            <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">{author.name}</span>
                {createdAt && <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">{createdAt}</span>}
            </div>
        </div>}
    </>);
}

export default Author;