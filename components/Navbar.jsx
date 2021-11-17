import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">DAC Agency</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">design</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">production</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">photography</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul
        className={styles.menu}
        style={{ right: open ? "0" : "-50vw" }}
        onClick={() => setOpen(false)}
      >
        <li className={styles.menuItem}>
          <Link href="/products/design">design</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">development</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">production</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">photography</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
