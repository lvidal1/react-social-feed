import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../store/actions/auth.actions";

import Comunity from "../Comunity";
import Feed from "../Feed";
import Hero from "../Hero";
import LoginModal from "../Modal/LoginModal";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  
  useEffect(() => {
    if(!auth.user){
      authActions.login(dispatch, { name: "Leonardo", email: "lvidal910@gmail.com" })
    }   
  }, []);

  return (
    <><div className="App">
      <Hero />
      <div className="max-w-screen-sm mx-auto p-2 sm:p-6">
        <Comunity />
        <Feed />
      </div>
    </div>
    <LoginModal />
    </>
  );
}
