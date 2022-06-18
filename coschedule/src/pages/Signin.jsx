import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/signin.css" ;

const Signin = () => {
  return (
    <div className="signinPage">
        
    <div className>
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

          <form action="submit">

            <div className="formComponent">
              <label >EMAIL ADDRESS</label>
              <br />
              <input  type="text" placeholder="Email Address" />
            </div>

            <div className="formComponent">
              <label >PASSWORD</label>
              <br />
              <input  type="text" placeholder="Password" />
            </div>

            <div className="formComponent">
                
            <input id="SigninBtn" type="submit" value="Sign In" />

            </div>

           
          </form>
        
        </div>

        {/* <p className="terms"  style={{ marginTop:'60px'}}>
          <span>© Copyright 2022, all rights reserved.  </span>
          <span className="underlined" > See our Terms & Policies.</span>
        </p> */}
    </div>
  )
}

export default Signin