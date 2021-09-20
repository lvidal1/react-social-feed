const Hero = () => {
    return <div className="w-full bg-center bg-cover h-56 bg-gradient-to-r from-purple-800  to-purple-500 bg-hero-pattern" >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Awesome Social Network!</h1>
                <a href="#feed" className=" inline-block w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-transparent border-2 border-white rounded-md sm:w-auto hover:border-purple-800 hover:bg-purple-800 focus:border-purple-800 focus:outline-none focus:bg-purple-800">Stay tuned!</a>
            </div>
        </div>
    </div>;
}

export default Hero;