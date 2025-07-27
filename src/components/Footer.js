import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Weather Now | Powered by OpenWeather API</p>
    </footer>
  );
}

export default Footer;
