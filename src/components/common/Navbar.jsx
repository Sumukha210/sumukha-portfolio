import React, { useEffect, useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

//BiMenuAltRight

const Navbar = () => {
  const [iconCliked, setIconClicked] = useState(false)
  const [bgSticky, setBgSticky] = useState(false)

  const handleIcon = () => setIconClicked(prev => !prev)

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
          <div className="Nav__logo">Kbs</div>

          <div className={`Nav__overlay ${iconCliked ? "open" : ""}`}></div>

          <button className="Nav__icon" onClick={handleIcon}>
            {iconCliked ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>

          <ul className={`Nav__menu ${iconCliked ? "open" : ""}`}>
            <li>Home</li>
            <li>about</li>
            <li>skills</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
