import Upwork from "../../Images/Upwork.png";
import Fiverr from "../../Images/fiverr.png";
import Amazon from "../../Images/amazon.png";
import Shopify from "../../Images/Shopify.png";
import Facebook from "../../Images/Facebook.png";

function Works() {
  return (
    <div>
      <div>
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
          Voluptatum, sed expedita? Nihil nemo.
          <br />
          Voluptatum, sed expedita? Nihil nemo. consectetur adipisicing elit{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur
        </span>

        <button>Hire Me</button>
      </div>
      <div>
        <div>
          <img src={Upwork} alt="" />
        </div>
        <div>
          <img src={Fiverr} alt="" />
        </div>
        <div>
          <img src={Amazon} alt="" />
        </div>
        <div>
          <img src={Shopify} alt="" />
        </div>
        <div>
          <img src={Facebook} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Works;
