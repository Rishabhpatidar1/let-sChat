import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setErr(true);
    }
  };

  return (
    <div className="container">
      <div className="formdiv">
        <h2 className="appname">Let's Chat</h2>
        <h4 className="title">Login</h4>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input
            type="password"
            autocomplete="new-password"
            placeholder="Password"
          />
          <button> sign in </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account ? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
