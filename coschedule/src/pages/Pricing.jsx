import React from 'react'
import styles from "./Pricing.module.css"
function Pricing() {
  return (
    <div>
        {/* <img id= {styles.img} src="https://mma.prnewswire.com/media/846690/CoSchedule_Logo.jpg?p=twitter" alt="" /> */}
        <h1 id= {styles.h1}>Choose Your All-In-One Marketing Calendar</h1>
        <p id= {styles.p}>Create your calendar free today. No credit card required</p>

        <div  id= {styles.priceContain}>

                           {/* first box */}
            
               <div id= {styles.price1}>
                     <hr id= {styles.hr}/>
                    <h4>FREE</h4>
                    <h2>Marketing Calendar</h2>
                    <p id= {styles.p2}>The forever-free marketing calendar to see everything in one place.</p>
                    <h1>$0</h1>
                    <h3>Free Forever</h3> 
                    <button id= {styles.btn}>Get Started Free</button>
                    <p id= {styles.p3}>Marketing Calendar Free includes:</p>
                       <div id= {styles.pContain}>
                            <p>Personal Project & Task Management</p>
                            <p>Unlimited Marketing Projects and Content</p>
                            <p>Marketing & Project Management Integrations</p>
                            <p>Social Media Publishing Up to 2 Profiles</p>
                            <p>Self-Serve Knowledge Base</p>
                            <p>Basic Support</p>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>

                           {/* second box */}

               <div id= {styles.price2}>
               <hr id= {styles.hr}/>
                    <h4>PRO</h4>
                    <h2>Marketing Calendar</h2>
                    <p id= {styles.p2}>An advanced marketing calendar with limitless publishing.</p>
                    <h1>$29</h1>
                    <h3>per user / month</h3>
                    <button id= {styles.btn}>Get Started Free</button>
                    <p id= {styles.p3}>Includes all Marketing Calendar Free capabilities, plus:</p>
                       <div id= {styles.pContain}>
                            <p>Unlimited, Shareable Read-Only Calendar Views</p>
                            <p>Team Task Management & Collaboration</p>
                            <p>Recurring Tasks & Events</p>
                            <p>Customizable Task Workflow Templates</p>
                            <p>Unlimited Social Media Publishing</p>
                            <p>Bulk Social Media Scheduling</p>
                            <p>Social Media Automation</p>
                            <p>Social Media Campaign Templates</p>
                            <p>Priority Support</p>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>

                        {/* third box */}

               <div id= {styles.price3}>
               <hr id= {styles.hr}/>
                    <h4>PRO</h4>
                    <h2>Marketing Suite</h2>
                    <p id= {styles.p2}>A family of agile marketing products that helps you coordinate your process, projects, and teams.</p>
                       <p id= {styles.talk}>Lets Talk</p>
                    <button id= {styles.btn2}>Contact Sales</button>
                    <p id= {styles.p3}>Includes all Marketing Calendar Pro capabilities, plus:</p>
                       <div id= {styles.pContain}>
                            <p>Marketing Campaigns</p>
                            <p>Sub-Calendars</p>
                            <p>Request Forms</p>
                            <p>Custom Permissions & User Access</p>
                            <p>Approval Workflows</p>
                            <p>Manager Visibility & Reporting</p>
                            <p>Kanban Board</p>
                            <p>Project & Campaign Templates</p>
                            <p>Advanced Audience Targeting for Social Publishing</p>
                            <p>Content Ideation Insights</p>
                            <p>Content Optimization Tools </p>
                            <p>Custom Integrations</p>
                            <p>Single Sign-On (SSO)</p>
                            <p>Custom Onboarding & Ongoing Training</p>
                            <p>1:1 Support With Dedicated Account Manager</p>
                            <p>And more!</p>
                       </div>
                       <hr />
                       <a href="">See all features</a>
               </div>
        </div>
    </div>
  )
}

export default Pricing