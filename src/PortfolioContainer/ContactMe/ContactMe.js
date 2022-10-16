import React from "react";
import "./ContactMe.css";
import imgBack from "../../assets/images/mailz.jpeg";
import loadingBar from "../../assets/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='main-container' id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch."} title={"Contact Me"} />
    </div>
  );
}
