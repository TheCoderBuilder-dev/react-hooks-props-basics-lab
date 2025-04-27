import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} />  {/* Pass the user's name to Home */}
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />  {/* Pass bio, github, and linkedin to About */}
    </div>
  );
}

export default App;
