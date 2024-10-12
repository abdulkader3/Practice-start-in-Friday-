import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

const Regester = () => {
  // to navigate
  const navigate = useNavigate();

  // firebase variabals
  const auth = getAuth();

  // custom state
  const [name, upname] = useState("");
  const [nameError, upnameError] = useState("");

  const [email, upemail] = useState("");
  const [emailError, upemailError] = useState("");

  const [password, uppassword] = useState("");
  const [passwordError, uppasswordError] = useState("");

  const [Confirmpassword, upConfirmpassword] = useState("");
  const [ConfirmpasswordError, upConfirmpasswordError] = useState("");

  // funtion for name

  const OnChangeName = (e) => {
    upname(e.target.value);
    upnameError("");
  };
  // funtion for Email

  const OnChangeEmail = (e) => {
    upemail(e.target.value);
    upemailError("");
  };
  // funtion for Password

  const OnChangePassword = (e) => {
    uppassword(e.target.value);
    uppasswordError("");
  };
  // funtion for ConfirmPassword

  const OnChangeConfirmPassword = (e) => {
    upConfirmpassword(e.target.value);
    upConfirmpasswordError("");
  };

  // on submit funtion
  const OnSubmitForm = (e) => {
    e.preventDefault();

    if (!name) {
      upnameError("Please enter your name");
    } else if (!email) {
      upemailError("Please enter your email");
    } else if (!password) {
      uppasswordError("Please enter your password");
    } else if (!Confirmpassword) {
      upConfirmpasswordError("Please enter your Confirm password");
    } else {
      if (password == Confirmpassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // set default
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL:
                "https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8",
            });

            //   send varifition mail
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
            });

            // tostify and naviget
            navigate("/");
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;

            console.log(errorCode);
            // ..

            if (errorCode == "auth/email-already-in-use") {
              // tostify
              console.log("accaount agi khola ase");
            }
            if (errorCode == "auth/weak-password") {
              // tostify
              console.log("atto chodo pass ?");
            }
          });
      } else {
        // tostify
        console.log(" password not match");
      }
    }
  };

  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className=" w-[500px] h-[100vh] bg-cyan-500 flex flex-col items-center ">
          <h1 className="text-4xl font-bold mt-10">Regester</h1>

          <form
            onSubmit={OnSubmitForm}
            className=" w-full h-full flex flex-col items-center "
          >
            <div className=" w-[350px] mt-10 ">
              <p className="text-xl font-medium">Name</p>
              <input
                onChange={OnChangeName}
                className="w-full h-[40px] rounded-lg outline-none "
                type="text"
              />
              <p className="text-[15px] font-medium text-red-800 ">
                {" "}
                {nameError}{" "}
              </p>
            </div>

            <div className=" w-[350px] mt-5 ">
              <p className="text-xl font-medium">Email</p>
              <input
                onChange={OnChangeEmail}
                className="w-full h-[40px] rounded-lg outline-none "
                type="email"
              />
              <p className="text-[15px] font-medium text-red-800 ">
                {emailError}{" "}
              </p>
            </div>

            <div className=" w-[350px] mt-5 ">
              <p className="text-xl font-medium">Password</p>
              <input
                onChange={OnChangePassword}
                className="w-full h-[40px] rounded-lg outline-none "
                type="password"
              />
              <p className="text-[15px] font-medium text-red-800 ">
                {passwordError}{" "}
              </p>
            </div>

            <div className=" w-[350px] mt-5 ">
              <p className="text-xl font-medium">Confirme Password</p>
              <input
                onChange={OnChangeConfirmPassword}
                className="w-full h-[40px] rounded-lg outline-none "
                type="password"
              />
              <p className="text-[15px] font-medium text-red-800 ">
                {ConfirmpasswordError}{" "}
              </p>
            </div>

            <button className="w-[350px] bg-white rounded-lg h-[40px] mt-10 hover:bg-transparent hover:border hover:text-white hover:scale-110 active:scale-95 transition-all ">
              {" "}
              Regester{" "}
            </button>

            <div className=" mt-10">
              <Link to="/">
                {" "}
                <p>don't have an accaount ? Regester </p>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Regester;
