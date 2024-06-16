import "./Header.css"

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kohantika</div>
      </div>
      <div className="n-right">
        <nav className="n-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <button className="n-button"><a href="#contact">Contact</a></button>
      </div>
    </div>
  );
}

export default Navbar;
