import Github from "../../Images/github.png";
import Linkdein from "../../Images/linkedin.png";
import Instagram from "../../Images/instagram.png";
import Vector1 from "../../Images/Vector1.png";
import Vector2 from "../../Images/Vector2.png";
import boy from "../../Images/boy.png";
import thumbup from '../../Images/thumbup.png'
import Crown from '../../Images/crown.png'
import glassesimoji from '../../Images/glassesimoji.png'

function Intro() {
  return (
    <div>
      <div>
        <span>Hey! I Am</span>
        <span> Kohantika Nath </span>
        <span>
          Software developer with high level of experience in web designing and
          development, producing the Quality work.
        </span>
        <button>Hire Me</button>
        <div>
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={Linkdein} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <img src={Crown} alt="" />
        <img src={thumbup} alt="" />
      </div>
    </div>
  );
}

export default Intro;
