const Avatar = ({user}) => {
    return <div className="max-w-xs sm:mb-0 mb-3 flex flex-col items-center text-center" title={user.name}>
        <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" h-12 w-12 object-cover rounded-xl" />
        {/* <p class="text-sm">{user.name}</p> */}
        <p class="text-xs text-gray-400">{user.username}</p>
    </div>;
}

export default Avatar;