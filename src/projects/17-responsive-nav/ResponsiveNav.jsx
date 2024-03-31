/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { NavStyle } from './NavStyle'
import Title from "../components/Title"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


// Update: pages 

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


export default function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })
  const [pageTitle, setPageTitle] = useState("");
  useEffect(() => {
    window.onresize = () => {

      let windowWidth = window.innerWidth;
      windowWidth > 600 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false });
      windowWidth < 600 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true });
    }
  }, [])
  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }

  const handleActive = (e) => {
    document.querySelectorAll(".nav-link").forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");
    setPageTitle(e.target.innerText);
  }

  // Update adding page navigation

  const [pages, setPages] = useState(<Home pageTitle={"Home"} />);

  const navigate = (e) => {
    document.querySelectorAll(".nav-link").forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");

    let navItem = e.target.innerText;
    switch (navItem) {
      case "About":
        setPages(<About pageTitle={navItem} />);
        break;
      case "Contact":
        setPages(<Contact pageTitle={navItem} />);
        break;
      case "Home":
        setPages(<Home pageTitle={navItem} />);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavStyle className={`navbar bg-primary text-light ${showElement.navOpened && "showNavbar"}`}>
        <div className="navbar-logo">
          <a href="#" className="navbar-brand">Norbert BM</a>
          {/* Open and close icons */}
          {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />} {" "}
          {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
        </div>
        <div className="navbar-collapse">
          {showElement.navbarNav ? (
            <ul
              className={`navbar-items ${showElement.navOpened && "showNavbar"
                }`}
            >
              <NavItem text={"Home"} active="active" onClick={navigate} />
              <NavItem text={"About"} onClick={navigate} />
              <NavItem text={"Contact"} onClick={navigate} />
            </ul>
          ) : null}
        </div>
      </NavStyle>
      {/* <h1 className="title text-center text-primary">
        {!pageTitle ? "Home" : pageTitle}
      </h1> */}
      <div className="container px-2 outlet">{pages}</div>
    </>
  )
}
