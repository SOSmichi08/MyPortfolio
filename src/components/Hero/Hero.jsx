import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
        <h1>
        <ReactTyped
          strings={["Hi, I'm Karl!"]}
          typeSpeed={50}
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
          wrapper="span"
          repeat={0} 
        />
      </h1>
      </div>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of Experience.
          Currently I am attending the IMS in Rapperswil SG.
        </p>
        <a href="mailto:karl.e.zenker@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
