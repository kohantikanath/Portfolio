import Card from "../Card/Card";
import HeartImoji from "../../Images/heartemoji.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";

function Services() {
    return (
      <div>
        <div>
          <span>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
            Voluptatum, sed expedita? Nihil nemo.
          </span>
          <a href="">
            <button>Download CV</button>
          </a>
        </div>
        <div>
          <Card
            emoji={HeartImoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML,CSS, JavaScript, React"}
          />
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "cached modules 1.41 MiB (javascript) 250 KiB (asset) [cached] 126 modules"
            }
          />
        </div>
      </div>
    );
}

export default Services;