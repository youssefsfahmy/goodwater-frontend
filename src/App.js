import "./App.css";
import Landing from "./Components/Landing";
// import throttle from "lodash.throttle";
import img from "./imgs/logo.png";
import ham from "./imgs/burger-bar.png";

function App() {
  function reveal() {
    console.log(window.pageYOffset);

    var offset = window.pageYOffset;
    var layer3 = document.querySelector(".layer3");
    var layer4 = document.querySelector(".layer4");
    var layer5 = document.querySelector(".layer5");
    // var layer6 = document.querySelector(".layer6");
    var layer61 = document.querySelector(".layer61");
    var layer62 = document.querySelector(".layer62");

    var layer7 = document.querySelector(".layer7");
    var layer8 = document.querySelector(".layer8");
    var layer9 = document.querySelector(".layer9");
    var layer10 = document.querySelector(".layer10");
    var layer11 = document.querySelector(".layer11");
    var layer1 = document.querySelector(".layer1");

    // console.log(layer3);
    if (offset > 50) {
      layer3.style.transform = `translate(-50%,${-0.2 * (offset - 50)}px)`;
      layer4.style.transform = `translate(-50%,${-0.2 * (offset - 50)}px)`;
      layer10.style.transform = `translate(-50%,${-0.2 * (offset - 50)}px)`;
    } else {
      layer3.style.transform = `translate(-50%,0px`;
      layer4.style.transform = `translate(-50%,0px`;
      layer10.style.transform = `translate(-50%,0px)`;
    }
    if (offset < 200) {
      // layer6.style.transform = `translate(-60%,${offset / 1}px)`;

      layer61.style.transform = `translate(-50%,${offset / 1}px)`;
      layer62.style.transform = `translate(-50%,${offset / 1}px)`;
      layer7.style.transform = `translate(-50%,${-offset / 4}px)`;
      layer5.style.transform = `translate(-50%,${-offset / 4}px)`;
      layer8.style.transform = `translate(-50%,${-offset / 2}px)`;
      layer9.style.transform = `translate(-50%,${-offset}px)`;
      layer11.style.transform = `translate(-50%,${-offset}px)`;
      layer1.style.transform = `translate(-50%,${-offset}px)`;
    } else {
      layer9.style.transform = `translate(-50%,${-calc(offset)}px)`;
      layer11.style.transform = `translate(-50%,${-calc(offset)}px)`;
      layer1.style.transform = `translate(-50%,${-calc(offset)}px)`;
    }
    // layer5.style.transform = `translate(-50%,${offset}px)`;
  }

  function calc(x) {
    return 200 + 0.5 * ((x - 200) ^ 2);
  }

  // window.addEventListener("scroll", throttle(reveal, 300), true);
  window.addEventListener("scroll", reveal, true);

  return (
    <div className="App">
      <div className="topnav">
        <img className="image" src={img} alt="img" />
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <img className="ham" src={ham} alt="img" />
      </div>
      <Landing />
    </div>
  );
}

export default App;
