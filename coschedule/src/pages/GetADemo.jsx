import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/getademo.css"

const GetADemo = () => {
  return (
    <div>
        <div className="upperDiv">
            <Link to="/" ><img src="https://coschedule.com/img/cos-logo-full-color.svg" className="cosLogo" alt="CoSchedule Logo" /></Link>
            <br />
            <div className="cosDemoTitle">
                <p className="cosTitle">See CoSchedule In Action</p>
                <p className="organizeCoschedule">See how you can organize everything in one place with CoSchedule.</p>
            </div>
        </div>

        <div className="formDiv">
          <form action="">
            <div className="formComponent">
              <label >Full Name</label>
              <br />
              <input  type="text" placeholder="Full Name" />
            </div>

            <div className="formComponent">
              <label >Email Address</label>
              <br />
              <input  type="text" placeholder="Work Email Address" />
            </div>

            <div className="formComponent">
              <label >Company</label>
              <br />
              <input  type="text" placeholder="Company Name" />
            </div>

            <div className="formComponent">
              <label >Website URL</label>
              <br />
              <input  type="text" placeholder="Company Website URL" />
            </div>

            <input className="nextSubmitBtn" type="submit" value="Next" />
           
          </form>
        <p className="terms"><span>By signing up, you agree to CoSchedule’s </span><span className="underlined" >terms of service, end user agreement, and privacy policy</span><span>; you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</span></p>
        </div>

        <p className="terms"  style={{ marginTop:'60px'}}>
          <span>© Copyright 2022, all rights reserved.  </span>
          <span className="underlined" > See our Terms & Policies.</span>
        </p>
    </div>
  )
}

export default GetADemo