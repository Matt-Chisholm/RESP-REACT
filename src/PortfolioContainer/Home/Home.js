import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import Projects from "../Projects/Projects";

export default function Home(props) {
  return (
    <>
      <div className='home-container' id={props.id || ""}>
        <Header />
        <Profile />
      </div>
    </>
  );
}
