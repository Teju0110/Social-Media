import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn,  } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {

    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MyBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSignIn}>

          {error && <alert variant="danger">{error}</alert>}   
            <input
              type="email"
              id="emailIdIn"
              placeholder="Email"
              className="loginInput"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="passwordIdIn"
              placeholder="Password"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="loginButton" type="submit">
              Log In
            </button>
            
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Login;
