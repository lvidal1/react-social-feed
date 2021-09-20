import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import Comunity from "../Comunity";
import Feed from "../Feed";
import Footer from "../Footer";
import Hero from "../Hero";
import LoginModal from "../Modal/LoginModal";
import Navbar from "../Navbar";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  
  useEffect(() => {
    if(!auth.user){
      //authActions.login(dispatch, { name: "Leonardo", email: "lvidal910@gmail.com" })  
    }   
  }, []);

  return (
    <><div className="App">
      <Navbar />
      <Hero />
      <div className="container max-w-screen-xl mx-auto">
        <div className="mx-4 md:ml-20 md:mr-48 flex flex-col md:flex-row my-6 md:my-12">
          <div className="w-full md:w-3/5 order-2 md:order-1"><Feed /></div>
          <div className="w-full md:w-2/5 order-1 md:order-2"><Comunity /></div>
        </div>
      </div>
      <Footer />
    </div>
    <LoginModal />
    </>
  );
}
