import Wave from "../../Images/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>kohan.nath@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kohantika-nath-25b023283/">
            <LinkedIn color="white" size="3rem"/>
          </a>
          <a href="https://github.com/kohantikanath">
            <GitHub color="white" size="3rem"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
