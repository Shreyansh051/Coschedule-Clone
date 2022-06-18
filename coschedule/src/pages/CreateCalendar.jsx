import React from 'react';

import styles from "../Css/createcalendar.module.css"

import { Link } from 'react-router-dom';


const CreateCalendar = () => {
  return (
    <div className={styles.calendarDiv} >
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
              <label className={styles.formComponent_label} >Full Name</label>
              <br />
              <input className={styles.formComponent_input}  type="text" placeholder="Full Name" />
            </div>

            <div className={styles.formComponent}>
              <label  className={styles.formComponent_label} >Email Address</label>
              <br />
              <input className={styles.formComponent_input}  type="email" placeholder="Work Email Address" />
            </div>

            <div className={styles.formComponent}>
              <label  className={styles.formComponent_label} >Company</label>
              <br />
              <input className={styles.formComponent_input}  type="text" placeholder="Company Name" />
            </div>

            <div className={styles.formComponent}>
              <label  className={styles.formComponent_label} >Website URL</label>
              <br />
              <input className={styles.formComponent_input}  type="text" placeholder="Company Website URL" />
            </div>

            <div className={styles.formComponent}>
              <label  className={styles.formComponent_label} >Password</label>
              <br />
              <input className={styles.formComponent_input} type="text" placeholder="Password  ( minimum 8 characters )" />
            </div>

            <input className={styles.nextSubmitBtn} type="submit" value="Get Started Now" />
           
          </form>
        <p className={styles.terms}><span className={styles.terms_span}>By clicking "Get Started Now", you agree to CoSchedule’s </span><span className={styles.underlined}>terms of service, end user agreement, and privacy policy</span><span className={styles.terms_span}>; you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</span></p>
        </div>

        {/* <p className={styles.}terms" style={{ marginTop:'60px'}}>
          <span>© Copyright 2022, all rights reserved.  </span>
          <span className={styles.}underlined} > See our Terms & Policies.</span>
        </p> */}
    </div>
  )
}

export default CreateCalendar ;