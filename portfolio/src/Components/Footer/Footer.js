import Wave from "../../Images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import FB from "@iconscout/react-unicons/icons/uil-facebook";
import GitHub from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
  return (
    <div>
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div>
        <span>kohan.nath@gmail.com</span>
        <div>
          <Insta color="gray" size="3rem" />
          <FB color="gray" size="3rem" />
          <GitHub color="gray" size="3rem" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
