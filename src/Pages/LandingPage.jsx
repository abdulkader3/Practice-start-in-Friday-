import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  // data from redux of current mainuser
  const mainUserReduxData = useSelector((state) => state.info.userdata);

  console.log(mainUserReduxData);

  const logout =()=>{
    localStorage.clear()
  }

  return (
    <>
    <Navbar/>
      <div className=" w-full h-[100vh] bg-lime-500 flex justify-center items-center ">

        <div className="w-[700px] h-screen bg-white flex flex-col items-center pt-20 justify-between">

          <div className="">
          <div className="w-[150px] h-[150px]   ">
            <img src={mainUserReduxData?.photoURL} alt="profile" />
          </div>
          <h3>Name : {mainUserReduxData?.displayName} </h3>
          <p>Email: {mainUserReduxData?.email} </p>
          </div>


          <div className=" w-full flex justify-center mb-20">
            <button 
            onClick={logout} 
             className="p-3 bg-black text-white rounded-full"> LogOut</button>
          </div>


        </div>


      </div>
    </>
  );
};

export default LandingPage;
