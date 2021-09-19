import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UIActions from "../../store/actions/ui.actions";

const LoginModal = () => {

    const dispatch = useDispatch();
    const { login } = useSelector((state) => state.ui.modal)

    useEffect(() => {

    }, [login]);

    const onClose = () => {
        UIActions.closeLoginModal(dispatch);
    }

    return <>
        {login && <div className="flex items-center flex-col justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-60">
            <svg className="m-4 fill-current text-white w-6 h-6 cursor-pointer" onClick={onClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
            <div className="bg-white rounded-lg w-3/4 sm:w-2/4 md:w-1/4">
                <div className="flex flex-col p-4 space-y-4">
                    <div className="text-gray-900 font-medium text-lg text-center">So, do you want to participate?</div>
                    <p className="text-gray-900 font-normal text-sm text-center">Just write an email and an name to know you first!</p>
                    <form className="space-y-2">
                        <div className="">
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="">
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                required
                                placeholder="Name"
                            />
                        </div>
                    </form>
                    <button className="bg-purple-500 hover:bg-purple-700 font-medium py-1 px-3 text-white rounded mx-auto ">
                        Go!
                    </button>
                </div>
            </div>
        </div>}
    </>;
}

export default LoginModal;