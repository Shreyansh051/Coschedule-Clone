import React from 'react'
import styles from "./customer.module.css";
import CustomerMap from './CustomerMap';



const Customer = () => {
  return (
   <>
     {/* add navbar also here  */}
      {/* // customer story work started */}
      <div className={styles.organizing_main_div}>
       
       <div className={styles.organizing_child_div}>
        {/* //starting div for creating navbar and heading  */}
         <div className={styles.customers_h1_div}>
          <h1 className={styles.customers_h1}>CUSTOMER STORIES</h1>
         </div>
         <div className={styles.organizing_h2_div}>
         <h2 className={styles.organizing_h2}>Organizing The World</h2>
         </div>
         <div className={styles.organizing_p_div}>
         <p className={styles.organizing_p}>CoSchedule helps the world’s best marketing teams take control of their entire marketing strategy. See how these featured customers have found success.</p>
          {/* <p className={styles.organizing_p}>featured customers have found success.</p> */}
         </div>
         
          
       </div>
      </div>
  

        

        <div>
            {/* story appending data */}

             <CustomerMap />
        </div>

{/* last main div heere i done */}

        <div className={styles.Get_Started_Free_main_div}>

          <div className={styles.Get_Started_Free_div}>
            <h1 className={styles.Get_Started_Free_h1}>Ready to get your marketing strategy organized?</h1>
            <p className={styles.Get_Started_Free_p}>Start Your Forever-Free CoSchedule Marketing Calendar.</p>
            <button className={styles.Get_Started_Free_button}>Get Started Free</button>
          </div>
        </div>

        
           
    


{/* add footer also here */}
   </>
  )
}

export default Customer






