import React from "react";
import img1 from "../imgs/1-Water.png";
import img2 from "../imgs/2-Bottle.png";
import img3 from "../imgs/3-Sky.png";
import img4 from "../imgs/4-background.png";
import img5 from "../imgs/5-Fog.png";
// import img6 from "../imgs/6-Text1.png";
import img62 from "../imgs/6-Text2.png";
import img61 from "../imgs/6-Text1.png";
import { useInView } from "react-intersection-observer";

// import img6 from "../imgs/6-Text.png";
import img7 from "../imgs/7-Midground.png";
import img8 from "../imgs/8-Fog.png";
import img9 from "../imgs/test.png";
import img10 from "../imgs/10-Fog.png";
import img11 from "../imgs/9-Forground-lower.png";

import "../CSS/landing.css";
export default function Landing() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div className="containere">
      <div className="wrapperwrapper ">
        <div className="wrapper div1">
          <img src={img3} className="layer3 reveal" alt="img" />
          <img src={img4} className="layer4 reveal" alt="img" />
          <img src={img5} className="layer5 reveal" alt="img" />
          <img src={img10} className="layer10 reveal" alt="img" />
          {/* <img src={img6} className="layer6 reveal" alt="img" /> */}
          <img src={img61} className="layer61 reveal" alt="img" />
          <img src={img7} className="layer7 reveal" alt="img" />{" "}
          <img src={img62} className="layer62 reveal" alt="img" />
          <img src={img8} className="layer8 reveal" alt="img" />
          <img src={img9} className="layer9 reveal" alt="img" />
        </div>{" "}
      </div>{" "}
      <div className="wrapperwrapper">
        <div className="wrapper div2">
          <img src={img1} className="layer1 " alt="img " />{" "}
          <div className={inView ? "textDiv floatuptext" : "textDiv"}>
            GOOD FOR YOU. GOOD FOR THE ENVIROMENT.
            <br /> GOOD FOR EARTH. <br />
            <br />
            <div className="textBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              pariatur.
            </div>
          </div>
          <img
            src={img2}
            alt="img"
            ref={ref}
            className={inView ? "layer2 floatup" : "layer2"}
          />
          <img src={img11} className="layer11 " alt="img" />
        </div>
      </div>
    </div>
  );
}
