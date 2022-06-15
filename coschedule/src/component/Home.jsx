import styles from"../Css/Home.module.css"

const Home =()=>{
    return(
        <div>
            <h1 className={styles.heading}>Organize All Of Your Marketing In 
            <h1>One Place.From&nbsp;Any&nbsp;Place.</h1>
             </h1>
             <p className={styles.para}>Get more done in less time with the only work management software for&nbsp;marketers.</p>
             <a href="" className={styles.button}>Get Started Free</a>
             <p className={styles.small}>Why not? it's free dorever</p>
             <img className={styles.imgposter} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=3840&q=75" alt="image"/>
             <h2>30,000 marketers start their day with&nbsp;CoSchedule</h2>
             
        </div>  
        
    )
}

export default Home;