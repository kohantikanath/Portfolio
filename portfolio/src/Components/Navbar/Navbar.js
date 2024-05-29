import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="n-left">
        <div className="n-name">Kohantika</div>
        <Toggle />
      </div>
      <nav>
        <ul className="navbar">
          <li class="nav-item">
            <a href="">Home</a>
          </li>
          <li class="nav-item">
            <a href="">Services</a>
          </li>
          <li class="nav-item">
            <a href="">Experience</a>
          </li>
          <li class="nav-item">
            <a href="">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="">Testimonials</a>
          </li>
        </ul>
      </nav>
      <button className="n-button">Contact</button>
    </header>
  );
}

export default Navbar;
