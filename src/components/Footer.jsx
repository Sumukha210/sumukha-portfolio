import React from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { animateScroll } from "react-scroll"
import { GrLinkedinOption } from "react-icons/gr"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import Button from "react-bootstrap/Button"

//AiOutlineTwitter
//AiFillGithub

const Footer = () => {
  const handleTopBtn = () => {
    animateScroll.scrollToTop()
  }

  return (
    <div className="footer">
      <Button className="toTopBtn" onClick={handleTopBtn}>
        <AiOutlineArrowUp />
      </Button>

      <div className="footer__container">
        <h6 className="text-light footer__title">sumukha kb</h6>

        <div className="pt-2">
          <Button
            className="linkIcon"
            as="a"
            href="https://www.linkedin.com/in/sumukha-kb-1251a71b8/"
            target="_blank"
          >
            <GrLinkedinOption />
          </Button>
          <Button
            className="linkIcon mx-3"
            as="a"
            href="https://github.com/Sumukha210"
            target="_blank"
          >
            <AiFillGithub />
          </Button>
          <Button
            className="linkIcon"
            as="a"
            href="https://twitter.com/sumukha210"
            target="_blank"
          >
            <AiOutlineTwitter />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer
