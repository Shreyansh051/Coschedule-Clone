import React from 'react';
// import { Link } from 'react-router-dom';
import styles from "../Css/createcalendar.module.css"

const CreateCalendar = () => {
  return (
    <div>
        <div className={styles.upperDiv}>
            {/* <Link to="/" ><img src="https://coschedule.com/img/cos-logo-full-color.svg" className={styles.}cosLogo} alt="CoSchedule Logo" /></Link>
            <br /> */}
            <div className={styles.cosDemoTitle}>
                <p className={styles.cosTitle}>Create My Marketing Calendar</p>
                <p className={styles.organizeCoschedule}>Free for life. No credit card required.</p>
            </div>
        </div>

        <div className={styles.formDiv}>
          <form action="">
            <div className={styles.formComponent}>
              <label >Full Name</label>
              <br />
              <input  type="text" placeholder="Full Name" />
            </div>

            <div className={styles.formComponent}>
              <label >Email Address</label>
              <br />
              <input  type="email" placeholder="Work Email Address" />
            </div>

            <div className={styles.formComponent}>
              <label >Company</label>
              <br />
              <input  type="text" placeholder="Company Name" />
            </div>

            <div className={styles.formComponent}>
              <label >Website URL</label>
              <br />
              <input  type="text" placeholder="Company Website URL" />
            </div>

            <div className={styles.formComponent}>
              <label >Password</label>
              <br />
              <input  type="text" placeholder="Password  ( minimum 8 characters )" />
            </div>

            <input className={styles.nextSubmitBtn} type="submit" value="Get Started Now" />
           
          </form>
        <p className={styles.terms}><span>By clicking "Get Started Now", you agree to CoSchedule’s </span><span className={styles.underlined}>terms of service, end user agreement, and privacy policy</span><span>; you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</span></p>
        </div>

        {/* <p className={styles.}terms" style={{ marginTop:'60px'}}>
          <span>© Copyright 2022, all rights reserved.  </span>
          <span className={styles.}underlined} > See our Terms & Policies.</span>
        </p> */}
    </div>
  )
}

export default CreateCalendar ;