import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#00008b" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <Image
              alt=""
              src={`/img/${user.logo}`}
              width="30px"
              height="30px"
            />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                alt=""
                src={`/img/${user.avatar}`}
                objectFit="cover"
                width="45px"
                height="45px"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
