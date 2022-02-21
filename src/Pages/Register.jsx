import React, {useState, useRef} from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const { signUp } = useAuth();
  let navigate = useNavigate();

  const handlesubmit =(e)=>{
    e.preventDefault();
    if(password !== passConfirm){
      setError("Password Doesn't Match ")
    }
    else{
      handleSignUp()
    }
  }
  

  async function handleSignUp(e) {
   

    
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">MyBook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handlesubmit}>
            {error && <alert variant="danger">{error}</alert>}

            <input
              type="email"
              placeholder="Email"
              className="registerInput"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              id="passwordconfirmId"
              placeholder="Confirm Password"
              className="registerInput"
              onChange={(e) => setPassConfirm(e.target.value)}
              required
            />
            <button className="registerButton"  type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="registerRegisterButton">
                Log into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
