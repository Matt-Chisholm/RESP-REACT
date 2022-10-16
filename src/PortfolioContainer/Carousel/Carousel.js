import React from "react";
import { Carousel } from "react-carousel3";

const style = {
  width: 600,
  height: 600,
};

export default () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}>
    <Carousel height={460} width={600} autoPlay={true}>
      <div key={1} style={style}>
        <img alt='' src='https://img.icons8.com/clouds/100/1A1A1A/react.png' />
      </div>
      <div key={2} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/color/48/000000/html-5--v1.png'
        />
      </div>
      <div key={3} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/color-glass/48/000000/css.png'
        />
      </div>
      <div key={4} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/fluency/48/000000/typescript.png'
        />
      </div>
      <div key={5} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/color/48/000000/javascript--v1.png'
        />
      </div>
      <div key={6} style={style}>
        <img
          alt=''
          src='https://img.icons8.com/fluency/48/000000/node-js.png'
        />
      </div>
    </Carousel>
  </div>
);
