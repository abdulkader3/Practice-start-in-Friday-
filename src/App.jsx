import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Regester from "./Pages/Regester";
import app from "./firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayouOne from "./Layout/LayouOne";
import Login from "./Pages/Login";
import AllFriends from "./Pages/AllFriends";
import AllUsers from "./Pages/AllUsers";
import FriendRquast from "./Pages/FriendRquast";

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayouOne />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Regester />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allfriends" element={<AllFriends />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/friendrequst" element={<FriendRquast />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={shanto} />
    </>
  );
}

export default App;
