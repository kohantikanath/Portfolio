import Wave from "../../Images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import FB from "@iconscout/react-unicons/icons/uil-facebook";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>kohan.nath@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <FB color="white" size="3rem" />
          <GitHub color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
