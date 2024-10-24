import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Pages.css";

const AllFriends = () => {
  // data from redux of current mainuser

  return (
    <>
      <Navbar />
      <div className=" w-full h-[100vh] bg-white flex justify-center items-center ">
        <div className="w-[700px] h-screen bg-blue-700 flex flex-col items-center pt-20  ">
          <h1 className="text-7xl font-bold mb-20">All user</h1>

          <div className="overflow-scroll alluserScrooll w-full">

            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" h-[60px] flex gap-10 items-center ">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
                  <img
                    src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
                    alt=""
                  />
                </div>
                <h3> SOME ONE NAME</h3>
                <button className="px-4 py-2 bg-black  text-white rounded-md hover:scale-110 active:scale-100 transition-all  ">
                  {" "}
                  Add
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AllFriends;
