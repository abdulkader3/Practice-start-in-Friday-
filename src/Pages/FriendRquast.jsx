import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Pages.css";
// firebase
import { getDatabase, ref, onValue } from "firebase/database";

const FriendRquast = () => {
  // main user from redux
  const mainuserData = useSelector((state) => state.info.userdata);

  // state for data manegement
  const [allUserdata, upallUserdata] = useState([]);

  

  console.log(allUserdata);

  // firebase read data
  const db = getDatabase();
  // data from realtime database
  useEffect(() => {
    const starCountRef = ref(db, "FriendRequast/"  );
    onValue(starCountRef, (snapshot) => {
      let bag = []
      snapshot.forEach((malmusola)=>{
        bag.push({...malmusola.val() , key : malmusola.key})
      })
      upallUserdata(bag)
    });
  }, []);



  
// UserId
// :
// "0YX0W3gjLJNnHEl0QTz2vpuOSJu1"
// email
// :
// "abdulkader.wabdeveloper@gmail.com"
// profile_picture
// :
// "https://firebasestorage.googleapis.com/v0/b/test-myself-34967.appspot.com/o/userProfile%2F0YX0W3gjLJNnHEl0QTz2vpuOSJu1.png?alt=media&token=b1caa8a2-0a39-4099-bd77-ac27c7418d2d"
// username
// :
// "pAGlo "


  return (
    <>
      <Navbar />
      <div className=" w-full h-[100vh] bg-[#233ae9] flex justify-center items-center ">
        <div className="w-[700px] h-screen bg-[#8732ff] flex flex-col items-center pt-20 ">
          <h1 className="text-7xl font-bold mb-20">Friend Requast</h1>

          <div className="overflow-scroll alluserScrooll w-full">
            {/* for map */}

            {
              allUserdata.map((sob)=>(
                 <div key={sob.key} className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src={sob?.profile_picture}
                    alt=""
                  />
                </div>
                <h3 className="w-[150px] font-bold ">{sob?.username} </h3>
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

export default FriendRquast;
