import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import V from 'max-validator';

import UIActions from "../../store/actions/ui.actions";
import authActions from "../../store/actions/auth.actions";
import uiActions from "../../store/actions/ui.actions";

const loginFormScheme = {
    name: 'required|string|min:2|max:50',
    email: [
        'required',
        'email'
    ],
};

const LoginModal = () => {

    const dispatch = useDispatch();
    const { login } = useSelector((state) => state.ui.modal)

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: V.getEmpty(),
    });

    useEffect(() => {

    }, [login]);

    useEffect(() => {
        const errors = V.validate(formState.values, loginFormScheme);

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

    const onClose = () => {
        UIActions.closeLoginModal(dispatch);
    }

    const handleChange = (event) => {
        event.persist();
        updateFormValue(event.target.name, event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formState.isValid) {
            const { name, email } = formState.values;
            authActions.login(dispatch, { name, email })
            uiActions.closeLoginModal(dispatch);
        }
    };

    return <>
        {login && <div className="flex items-center flex-col justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-60">
            <svg className="m-4 fill-current text-white w-6 h-6 cursor-pointer" role="button" alt="close" title="close" onClick={onClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
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
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                tabIndex="1"
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
                                onChange={handleChange}
                                required
                                placeholder="Name"
                                tabIndex="2"
                            />
                        </div>
                    </form>
                    <button className={`bg-white text-sm font-medium py-1 px-3 rounded tracking-wide mx-auto  
                ${!formState.isValid ? "bg-purple-300 cursor-not-allowed text-white" : "bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 text-white"}`} disabled={!formState.isValid} onClick={handleSubmit}>
                        Go!
                    </button>
                </div>
            </div>
        </div>}
    </>;
}

export default LoginModal;