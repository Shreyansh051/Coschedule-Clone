import React from 'react';
import { Link } from 'react-router-dom';
import "../css/createcalendar.css"

const CreateCalendar = () => {
  return (
    <div>
        <div className="upperDiv">
            {/* <Link to="/" ><img src="https://coschedule.com/img/cos-logo-full-color.svg" className="cosLogo} alt="CoSchedule Logo" /></Link>
            <br /> */}
            <div className="cosDemoTitle">
                <p className="cosTitle">Create My Marketing Calendar</p>
                <p className="organizeCoschedule">Free for life. No credit card required.</p>
            </div>
        </div>

        <div className= "formDiv">
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

            <div className="formComponent">
              <label >Password</label>
              <br />
              <input  type="text" placeholder="Password  ( minimum 8 characters )" />
            </div>

            <input className="nextSubmitBtn" type="submit" value="Get Started Now" />
           
          </form>
        <p className="terms"><span>By clicking "Get Started Now", you agree to CoSchedule’s </span><span className="underlined">terms of service, end user agreement, and privacy policy</span><span>; you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</span></p>
        </div>

        {/* <p className="terms" style={{ marginTop:'60px'}}>
          <span>© Copyright 2022, all rights reserved.  </span>
          <span className="underlined} > See our Terms & Policies.</span>
        </p> */}
    </div>
  )
}

export default CreateCalendar ;