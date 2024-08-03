import React, { useState } from 'react';
import '../../App.module.css'; // Ensure this imports the CSS defined above

const Impressum = () => {
  const [theme, setTheme] = useState('classic'); // Default theme

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

};

export default Impressum;
