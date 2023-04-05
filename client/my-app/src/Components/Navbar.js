import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <h3>
          {" "}
          Hollywood <br></br>Cinema
        </h3>
        <Link className="programs" to={"/programs"}>
          Programs
        </Link>
        <Link className="home" to={"home"}>
          Home
        </Link>
        <Link to={"/about"} className="about">
          About us
        </Link>
         <Link className="myticket" to={"/myticket"}>My Ticket</Link>
        <h4 className="Chic"> Hollywood</h4>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
       
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
