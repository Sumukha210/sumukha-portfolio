import React, { useEffect, useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import CustomNavLink from "./NavLink"
import { animateScroll } from "react-scroll"

//BiMenuAltRight

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)
  const [bgSticky, setBgSticky] = useState(false)

  const handleIcon = () => setMenuIcon(prev => !prev)
  const handleClose = () => setMenuIcon(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setBgSticky(true)
      } else {
        setBgSticky(false)
      }
    })
  }, [])

  return (
    <>
      <div className={`Nav ${bgSticky ? "bgSticky" : ""} `}>
        <div className="Nav__container">
          <div
            className="Nav__logo"
            onClick={() => animateScroll.scrollToTop()}
          >
            Kbs
          </div>

          <div className={`Nav__overlay ${menuIcon ? "open" : ""}`}></div>

          <button className="Nav__icon" onClick={handleIcon}>
            {menuIcon ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>

          <ul className={`Nav__menu ${menuIcon ? "open" : ""}`}>
            <CustomNavLink name="home" handleClose={handleClose} />
            <CustomNavLink name="about" handleClose={handleClose} />
            <CustomNavLink name="skills" handleClose={handleClose} />
            <CustomNavLink name="project" handleClose={handleClose} />
            <CustomNavLink name="contact" handleClose={handleClose} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
