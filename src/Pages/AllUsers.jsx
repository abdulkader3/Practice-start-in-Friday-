import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Pages.css";
// firebase
import { getDatabase, ref, onValue } from "firebase/database";


const AllUsers = () => {

  // main user from redux
  const mainuserData = useSelector((state)=>state.info.userdata)

  // state for data manegement
  const [allUserdata , upallUserdata] = useState([])

  console.log(allUserdata)



  // firebase read data
  const db = getDatabase();
  // data from realtime database
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let bosta = []
      snapshot.forEach((malamal)=>{

        if(malamal.val().UserId !== mainuserData.uid){
          bosta.push({...malamal.val() , key : malamal.key})
        }

        

      })
      upallUserdata(bosta)

    });
  }, []);

  return (
    <>
      <Navbar />
      <div className=" w-full h-[100vh] bg-white flex justify-center items-center ">
        <div className="w-[700px] h-screen bg-red-600 flex flex-col items-center pt-20  ">
          <h1 className="text-7xl font-bold mb-20">All user</h1>

          <div className="overflow-scroll alluserScrooll w-full">
            {/* for map */}

            {
              allUserdata.map((arrDAta)=>(
                <div key={arrDAta.key} className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src={arrDAta?.profile_picture}
                    alt=""
                  />
                </div>
                <h3 className="w-[150px] font-bold "> {arrDAta?.username} </h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
              ))
            }
            
            {/* for map */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
