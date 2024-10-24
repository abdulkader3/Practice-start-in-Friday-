import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const AllFriends = () => {
  // data from redux of current mainuser
  const mainUserReduxData = useSelector((state) => state.info.userdata);

  console.log(mainUserReduxData);

  return (
    <>
    <Navbar/>
      <div className=" w-full h-[100vh] bg-white flex justify-center items-center ">

        <div className="w-[700px] h-screen bg-blue-600 flex flex-col items-center pt-20 justify-between">

      



        </div>


      </div>
    </>
  );
};

export default AllFriends;
