import React from "react";
import Links from "./Links"; // Ensure this path matches your directory structure

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Conditionally render the bio */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Pass props to Links */}
    </div>
  );
}

export default About;
