import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='projects-container'>
      <ScreenHeading
        title='Projects'
        subHeading='A few things I have worked on'
      />
      <div className='projects-parent'>
        <div className='projects-card'>
          <div className='projects-img-1'>{}</div>
          <div className='projects-card-header'>
            <div className='projects-card-header-title'>
              <h2>Paw-Five</h2>
              <a
                href='https://github.com/Matt-Chisholm/Paw-Five'
                target={"_blank"}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='white'
                  className='bi bi-github'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </a>
            </div>
            <div className='projects-description'>
              <h4>
                PAWFIVE is a specialized training app for dogs, supported by
                their owners, to track their skill progressions and sessions,
                while aided by voice recognition features.
              </h4>
            </div>
            <div className='projects-stack'>
              <span>React</span>
              <span>Express</span>
              <span>Node</span>
              <span>PostgreSQL</span>
              <span>SCSS</span>
            </div>
          </div>
        </div>
      </div>
      <div className='projects-parent'>
        <div className='projects-card'>
          <div className='projects-img-2'>{}</div>
          <div className='projects-card-header'>
            <div className='projects-card-header-title'>
              <h2>TS Maps</h2>
              <a
                href='https://github.com/Matt-Chisholm/maps-ts'
                target={"_blank"}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='white'
                  className='bi bi-github'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </a>
            </div>
            <div className='projects-description'>
              <h4>
                A google map interface using Typescript and the Google Maps API.
              </h4>
            </div>
            <div className='projects-stack'>
              <span>Typescript</span>
              <span>Node</span>
              <span>HTML</span>
            </div>
          </div>
        </div>
      </div>
      <div className='projects-parent'>
        <div className='projects-card'>
          <div className='projects-img-3'>{}</div>
          <div className='projects-card-header'>
            <div className='projects-card-header-title'>
              <h2>Twatch</h2>
              <a
                href='https://github.com/Matt-Chisholm/Twatch'
                target={"_blank"}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='white'
                  className='bi bi-github'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </a>
            </div>
            <div className='projects-description'>
              <h4>
                Twatch is an unhosted, fully functioning twitch clone, with
                google authorization and multi-stream capabilities.
              </h4>
            </div>
            <div className='projects-stack'>
              <span>React</span>
              <span>Redux</span>
              <span>Lodash</span>
              <span>JSON server/several API's.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
