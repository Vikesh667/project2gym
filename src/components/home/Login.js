import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Data, Data2, Data3 } from "../../components/Atom/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [newData, setNewData] = useRecoilState(Data);
  setNewData(false);
  const sub = useRecoilValue(Data2);
  const sub1 = useRecoilValue(Data3);
  let getData = JSON.parse(localStorage.getItem("userDetails")); 
  console.log(getData, "i am from local");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newARR = getData.filter(
      (x) => x.UserName === userName && x.Password === password
    );
    console.log(newARR, "i am matched data from local storage");
    if (newARR.length === 0) {
      toast.warning("User not found");
    } else {
      toast.success(` Welcome , ${userName} `);
      setShow(true);
      setNewData(true);
      if (sub === true) {
        navigate("/activity");
      }
      if (sub1 === true) {
        navigate("/activity1 ");
      }
    }
  }

  function loginButNotSUb() {
    setNewData(true);
  }

  function captUserName(e) {
    setUserName(e.target.value);
  }
  function capturePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="outer">
          <h3>Login</h3>

          <div className="img">
          
          </div>
          <input
            className="user"
            type="text"
            name="name"
            placeholder="Username"
            value={userName}
            onChange={captUserName}
          />
         
          <input
            className="pass"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={capturePassword}
          />
        
          <div className="btn">
            <button className="SignUpButton">Login</button>
          </div>
        </div>
        <br />
        <p>
          Don't have an account?
          <br />
          <Link to="/SignUp">Register</Link>
        </p>
      </form>

      {show ? (
        <p className="popup">
          NOW YOU CAN GET SUBSCRIBED TO OUR PREMIUM FEATURES <br />
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bolder",
              textShadow: "1px 1px black",
            }}
          >
            <button onClick={loginButNotSUb}>Home</button>
          </Link>
        </p>
      ) : (
        ""
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Login;
