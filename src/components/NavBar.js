import React from "react";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
    </nav>
  );
}

// Simple styles object
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#282c34",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 16px",
  }
};

export default NavBar;
