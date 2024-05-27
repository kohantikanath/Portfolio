import Sidebar from "../../Images/sidebar.png";
import Ecommerce from "../../Images/ecommerce.png";
import MusicApp from "../../Images/musicapp.png";
import HOC from "../../Images/hoc.png";

function Portfolio() {
  return (
    <div>
      <span>Recent Projects</span>
      <span>Portfolio</span>

        <div>
          <img src={Sidebar} alt="" />
        </div>
        <div>
          <img src={Ecommerce} alt="" />
        </div>
        <div>
          <img src={MusicApp} alt="" />
        </div>
        <div>
          <img src={HOC} alt="" />
        </div>
    </div>
  );
}

export default Portfolio;
