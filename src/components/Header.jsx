import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar fluid rounded className="px-0 bg-white shadow-md sticky top-0 z-50">
      <Navbar.Brand>
        <img src={logo} className="mr-2 sm:mr-4 h-24" alt="Rustic Acres Logo" />
        <span className="hidden sm:block self-center whitespace-nowrap text-2xl font-bold text-deepBurgundy">
          Rustic Acres
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="hidden sm:block bg-softGold text-white px-4 py-2 rounded-lg hover:bg-mutedTeal transition">
          Contact Us
        </Button>
        <Navbar.Toggle className="" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active={path === "/"}
          className="text-gray-600 hover:text-deepBurgundy"
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/puppy-images"}
          className="text-gray-600 hover:text-deepBurgundy"
        >
          <Link to="/puppy-images">Puppies</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          className="text-gray-600 hover:text-deepBurgundy"
        >
          <Link to="/about">About Us</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/faq"}
          className="text-gray-600 hover:text-deepBurgundy"
        >
          <Link to="/faq">FAQ</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/contact"}
          className="text-gray-600 hover:text-deepBurgundy"
        >
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
