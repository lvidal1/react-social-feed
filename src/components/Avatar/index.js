const Avatar = ({user}) => {
    return <div className="max-w-xs sm:mb-0 mb-3 flex flex-col items-center text-center" title={user.name}>
        <img src={`https://i.pravatar.cc/100?u=${user.id}`} alt={user.username} className="w-12 h-12 rounded-full" />
        {/* <p className="text-sm">{user.name}</p> */}
        <p className="text-xs text-gray-400">{user.name}</p>
    </div>;
}

export default Avatar;