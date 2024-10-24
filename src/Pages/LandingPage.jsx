import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

// firebase
import { getDownloadURL, getStorage, ref, uploadString  } from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
// firebase

// react croper
import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { CiSaveUp2 } from "react-icons/ci";


// react croper

const LandingPage = () => {
  // data from redux of current mainuser
  const mainUserReduxData = useSelector((state) => state.info.userdata);

  // firebase
  const storage = getStorage();
  const auth = getAuth();
  const storageRef = ref(
    storage,
    "userProfile/" + mainUserReduxData?.uid + ".png"
  );
  // firebase

  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  // profile edit magement

  const [profile, upprofile] = useState(false);

  const edit = () => {
    upprofile(!profile);
  };

  // react cruper

  const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    } else{

    }
  };
  // react cruper

  // button manege
  const [hide , uphide] = useState(false)
  const show = ()=>{
    uphide(!hide)
  }
  // button manege

  // save button
  const save = () => {
    // firebase
    const message4 = cropData;
    uploadString(storageRef, message4, "data_url").then((snapshot) => {
      console.log("Uploaded a data_url string!");
    });

    getDownloadURL(storageRef)
    .then((url) => {
      console.log(url)
      onAuthStateChanged(auth, (user) => {
        updateProfile(auth.currentUser, {
           photoURL: url,
        }).then(()=>{location.reload()})
      });
      upprofile(false)
      
    });
    // firebase
  };
  // save button

  // profile edit magement

  return (
    <>
      <Navbar />
      <div className=" w-full h-[100vh] bg-lime-500 flex justify-center items-center ">
        <div className="w-[700px] relative h-screen bg-white flex flex-col items-center pt-20 justify-between">
          <div className="">
            <div className="w-full flex justify-between">
              <div className="w-[150px] h-[150px] overflow-hidden rounded-full ">
                <img className="w-full" src={mainUserReduxData?.photoURL} alt="profile" />
              </div>
              <FaEdit onClick={edit} />
            </div>
            <h3>Name : {mainUserReduxData?.displayName} </h3>
            <p>Email: {mainUserReduxData?.email} </p>
          </div>

          <div className=" w-full flex justify-center mb-20">
            <button
              onClick={logout}
              className="p-3 bg-black text-white rounded-full"
            >
              {" "}
              LogOut
            </button>
          </div>

          {/* update profile */}
          {profile && (
            <div className=" w-full h-full bg-[#303030c1] absolute ">
              <div className="w-full flex justify-end text-4xl ">
                
                <FcCancel onClick={edit} />
              </div>
              <div className="w-full flex ml-auto text-4xl mb-5 mt-[-30px] ">
                
              {cropData && cropData !== "#" && (
                <CiSaveUp2 className="bg-[#ffffffb9] rounded-full" onClick={save} />
              )}
              </div>
              {/* cropper TSX  */}
              <div>
                <div style={{ width: "100%" }}>
                  <div className="flex w-full md:mt-2">
                    <input
                      className="text-[9px] md:text-[16px]"
                      type="file"
                      onChange={onChange}
                    />
                  </div>
                  <br />
                  <br />
                  <Cropper
                    ref={cropperRef}
                    className="w-full h-[200px] md:h-[300px]" // Responsive heights for different devices
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                  />
                </div>
                <div>
                  <div
                    className="box pt-5 px-5"
                    style={{ width: "100%", float: "right" }}
                  >
                    <h1>
                      <button style={{ float: "right" }} onClick={getCropData}>
                        Crop Image
                      </button>
                    </h1>
                    <img
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      src={cropData}
                      alt="img"
                    />
                  </div>
                </div>
                <br style={{ clear: "both" }} />
              </div>

              {/* cropper TSX  */}
            </div>
          )}
          {/* update profile */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
