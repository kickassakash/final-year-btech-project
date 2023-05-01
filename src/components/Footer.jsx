// import Image from "next/image";
import styles from "./Footer.module.css";
import bg from "../img/bg.png";

const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <div className={styles.item}>
        <img src={bg} objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Thanks for choosing Meals2Go for your food cravings. We hope you enjoyed your meal and look forward to serving you again soon!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Lake View Apartments, Model Town
            <br /> Delhi - 110009
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
          321, Park Street, Salt Lake City
            <br /> Kolkata - 700017
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
          Road No. 7, Jubilee Hills
            <br /> Hyderabad - 500033
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
          12/1, Park Lane, Ballygunge
            <br /> Kolkata - 700017
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
