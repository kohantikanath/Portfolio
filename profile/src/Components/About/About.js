import about from "../../Images/about_me.png";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="abt-cont">
        <div className="abt-left">
          <p>
            Welcome to my portfolio! I am currently a student at Scaler School of
            Technology, where I am honing my skills and deepening my understanding
            of technology and its applications. Passionate about leveraging
            cutting-edge tools and techniques, I am dedicated to mastering the art
            of software engineering and design. Through my journey at Scaler, I am
            exploring new horizons and pushing the boundaries of what's possible
            in the world of technology. Join me as I embark on this exciting
            adventure of learning and innovation!
          </p>
        </div>
        <img src={about}  alt="" className="clouds"/>
      </div>
    </div>
  );
}

export default About;
