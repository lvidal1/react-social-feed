import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo.svg';
import authActions from '../../store/actions/auth.actions';
import UIActions from "../../store/actions/ui.actions";

const Navbar = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const onSignUp = () => {
        UIActions.openLoginModal(dispatch);
    }

    const onLogout = () => {
        authActions.logout(dispatch);
    }
    

    return <nav className="bg-transparent absolute w-full" role="navigation">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
            <div className="mr-4 md:mr-8">
                <a href="#!" rel="home">
                    <img className="w-8" src={logo} alt="Logo" />
                </a>
            </div>
            <div className="text-sm">
                {!auth.user && <a className="block px-4 py-1 md:p-2 lg:px-4 text-white hover:font-semibold focus:font-semibold" href="#!" title="Sign up" onClick={onSignUp}>Sign up</a>}
                {auth.user && <div className="block px-4 py-1 md:p-2 lg:px-4 text-white">Welcome, <b>{auth.user.name}</b> (<a className="underline" href="#!" title="User" onClick={onLogout}>Logout</a>)</div>}
            </div>
        </div>
    </nav>;
}

export default Navbar;