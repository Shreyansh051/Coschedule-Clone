import styles from "../Css/Home.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        Organize All Of Your Marketing In
        <h1>One Place.From&nbsp;Any&nbsp;Place.</h1>
      </h1>
      <p className={styles.para}>
        Get more done in less time with the only work management software
        for&nbsp;marketers.
      </p>
      <a href="" className={styles.button}>
        Get Started Free
      </a>
      <p className={styles.small}>Why not? it's free dorever</p>
      <img
        className={styles.imgposter}
        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=3840&q=75"
        alt="image"
      />
      <h2 className={styles.heading2}>
        30,000 marketers start their day with&nbsp;CoSchedule
      </h2>
      <div className={styles.container}>
        <div className={styles.second_container}>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
          <div className={styles.customerlogo}>
            <span>
              <img
                className={styles.imgstyle}
                src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75"
                alt="logo1"
              />
            </span>
          </div>
        </div>
      </div>

      <div ClassName={styles.BigBox}>
        <div ClassName={styles.boxA}>
          <h2 className={styles.heading3}>Our Products</h2>
        </div>
        <div ClassName={styles.boxB}>
          <div ClassName={styles.smallBox1}></div>
          <div ClassName={styles.smallBox2}></div>
        </div>
        <div ClassName={styles.boxC}>
          <div ClassName={styles.smallBox3}></div>
          <div ClassName={styles.smallBox4}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
