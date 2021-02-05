import React from "react"
import { Link } from "react-scroll"

const NavLink = ({ name, handleClose }) => {
  const handleCloseMenu = () => {
    handleClose()
  }

  return (
    <li>
      <Link
        activeClass="active"
        to={name}
        spy={true}
        smooth={true}
        duration={700}
        offset={-100}
        isDynamic={true}
        onClick={handleCloseMenu}
      >
        {name}
      </Link>
    </li>
  )
}

export default NavLink
