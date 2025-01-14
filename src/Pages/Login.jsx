import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { mainUser } from "../Slices/userSlice";
import { Slide, toast } from "react-toastify";
import { getDatabase, ref, set } from "firebase/database";

const Login = () => {




  // variaval redux 
  const dispatch = useDispatch()
  


  // navigate
  const navigate = useNavigate()




  // firebase variabels
  const auth = getAuth();
  const db = getDatabase();

  // custom state
  const [email, upemail] = useState("");
  const [emailError, upemailError] = useState("");
  const [password, uppassword] = useState("");
  const [passwordError, uppasswordError] = useState("");

  // email funtion
  const onChangEmail = (e) => {
    upemail(e.target.value);
    upemailError("");
  };
  // password funtion
  const onChangPassword = (e) => {
    uppassword(e.target.value);
    uppasswordError("");
  };

  // form funtion
  const formesubmit = (e) => {
    e.preventDefault();
    if (!email) {
      upemailError("Please enter your email");
    } else if (!password) {
      uppasswordError("Please enter your password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          // tostify and navigat succece
          if(user.emailVerified == false){
            toast('Please verify your email', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
              });
          } else{


            dispatch(mainUser(user))
            localStorage.setItem('mainUser' , JSON.stringify(user))
            toast('Login success', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
              });
              navigate('/')


              // user regester
              set(ref(db, 'users/' + user.uid), {
                UserId: user.uid,
                username: user.displayName,
                email: user.email,
                profile_picture : user.photoURL,
              });
              // user regester
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode == "auth/invalid-credential") {
            // tostify
            console.log("somting went wrong panssword must be incorrect");
            toast('Password incorrect or create a new account', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
              });
          }
        });
    }
  };
  return (
    <>
      <div className="main w-full h-[100vh] flex justify-center ">
        <form
          onSubmit={formesubmit}
          className="w-[500px] h-full flex items-center flex-col  bg-orange-500 "
        >
          <h2 className="text-4xl font-bold">Login</h2>
          <p className=" text-[25px] mt-10 ">email</p>
          <input
            onChange={onChangEmail}
            className=" w-full h-[50px] bg-transparent border rounded-[20px] pl-[35px] mt-3 mb-3  "
            type="email"
            placeholder="email"
          />
          <p className="text-[12px] text-[#c7ff1f] ">{emailError} </p>
          <p className="text-[25px] text-start">password</p>
          <input
            onChange={onChangPassword}
            className=" w-full h-[50px] bg-transparent border rounded-[20px] pl-[35px] mt-3 mb-3   "
            type="password"
            placeholder="password"
          />
          <p className="text-[12px] text-[#c7ff1f] ">{passwordError} </p>
          <button className="w-full h-[50px] bg-transparent border rounded-[20px] pl-[35px] mt-20 mb-3 hover:bg-white hover:text-cyan-400 active:scale-110 hover:scale-95 transition-all">
            Login
          </button>
          <div className=" mt-10">
            <Link to="/register">
              {" "}
              <p>Don't have an accaount ? Regester </p>{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
