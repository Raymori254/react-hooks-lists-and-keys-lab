import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a href="#home" key="name">home</a>
  <a href="#about" key ="index">about</a>
  <a href="#projects" key ="id" >projects</a>
  </nav>;
}

export default NavBar;
