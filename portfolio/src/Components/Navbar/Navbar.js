import Toggle from "../Toggle/Toggle";

function Navbar() {
  return (
    <div>
      <div>
        <div>Kohantika</div>
        <Toggle />
      </div>
      <div>
        <div>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Experience</a>
          <a href="">Portfolio</a>
          <a href="">Testimonials</a>
        </div>
      </div>
      <button>Contact</button>
    </div>
  );
}

export default Navbar;
