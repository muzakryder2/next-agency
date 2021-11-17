import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLg}>
        <h1 className={styles.title}>DAC Agency</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link}>
            <a>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" width="40px" height="40px" alt="" />
            </a>
          </Link>
        </h1>
      </div>
      <div className={styles.cardSm}>
        <div className={styles.cardItem}>
          123 Main Street <br /> Anytown USA
        </div>
        <div className={styles.cardItem}>
          contact@myemail.com <br /> +1 (555) 555-5555
        </div>
      </div>
      <div className={styles.cardSm}>
        <div className={styles.cardItem}>
          FOLLOW US: <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2021 DAC AGENCY, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
