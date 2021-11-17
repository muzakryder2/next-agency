import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-40vh" zIndex="-1" />
      <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-70vh"
        zIndex="-2"
      />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputSm} placeholder="Username" />
        <input type="tel" className={styles.inputSm} placeholder="Phone" />
        <input type="email" className={styles.inputLg} placeholder="Email" />
        <input type="text" className={styles.inputLg} placeholder="Subject" />
        <textarea
          rows={6}
          className={styles.textArea}
          placeholder="Message"
        ></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
