import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import underline from "../../assets/nav_underline.svg";
const Navbar = () => {
  // const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img  src="/public/logo.png" width={100} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>Protfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"> Connect With Me </AnchorLink></div>
    </div>
  );
};

export default Navbar;
