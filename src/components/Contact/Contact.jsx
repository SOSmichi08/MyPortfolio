
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [theme, setTheme] = useState('classic');

  const changeTheme = (newTheme) => {
    document.documentElement.className = newTheme;
    setTheme(newTheme);
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:karl.e.zenker@gmail.com">E-Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/karl-zenker-30554129b/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/SOSmichi08">Github</a>
        </li>
      </ul>
      <div className={styles.settings}>
        <h2>Themes</h2>
        <div className={styles.themes}>
          <button onClick={() => changeTheme('classic')}>Classic</button>
          <button onClick={() => changeTheme('highContrast')}>High Contrast</button>
          <button onClick={() => changeTheme('soft')}>Soft</button>
          <button onClick={() => changeTheme('cool')}>Cool</button>
          <button onClick={() => changeTheme('dark')}>Dark</button>
        </div>
      </div>
      <a className={styles.impressumLink} href="/src/components/Impressum/impressum.html" target="_blank">Impressum</a>
    </footer>
  );
};
