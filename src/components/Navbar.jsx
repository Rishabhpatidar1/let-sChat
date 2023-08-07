import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2>Let's Chat</h2>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <p> {currentUser.displayName} </p>
        <button onClick={() => signOut(auth)}> Logout </button>
      </div>
    </div>
  );
};

export default Navbar;
