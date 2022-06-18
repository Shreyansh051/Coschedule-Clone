import React, { useState } from "react";

// =======
import { useNavigate, NavLink } from "react-router-dom";

const Signin = () => {
// >>>>>>> 4b3c9e7d0ee08522017e8cde34c34e705d5775af
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Types": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Sucessfull");
      navigate.push("/");
    }
  };

  return (
    <div className="SigninPage">
      {/* <h1>Login_Page</h1>
      <form method="POST">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" onClick={loginUser} />
      </form> */}

<div >
<img src="https://accounts.coschedule.com/img/login-boxes.svg"
 class="login-boxes-bg left" alt="Boxes to the Left" />
 <img src="https://accounts.coschedule.com/img/login-boxes.svg"
 class="login-boxes-bg right" alt="Boxes to the Right" />
</div>
    <div className="formDiv">
    <Link to="/" >
      <img src="https://coschedule.com/img/cos-logo-full-color.svg" className="cosLogo" alt="CoSchedule Logo" />
    </Link>
    <br />

      <form method="POST">

        <div className="formComponent">
          <label >EMAIL ADDRESS</label>
          <br />
          <input   type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           placeholder="Email Address" required />
        </div>

        <div className="formComponent">
          <label >PASSWORD</label>
          <br />
          <input  type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>

        <div className="formComponent">
            
        <input id="SigninBtn"type="submit" onClick={loginUser} value ="Sign In" />

        </div>

       
      </form>
{/* <<<<<<< HEAD */}
    
// =======
      <br />
      <NavLink to="/Signup">Need an account?</NavLink>
{/* >>>>>>> 4b3c9e7d0ee08522017e8cde34c34e705d5775af */}
    </div>

    {/* <p className="terms"  style={{ marginTop:'60px'}}>
      <span>© Copyright 2022, all rights reserved.  </span>
      <span className="underlined" > See our Terms & Policies.</span>
    </p> */}

    </div>



        

  );
};

export default Signin;
