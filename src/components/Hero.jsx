import React from "react"
import Particles from "react-particles-js"
import particlesConfig from "./common/particleConfig"
import { animateScroll } from "react-scroll"

const Hero = () => {
  return (
    <div className="hero" id="home">
      <Particles className="hero__particle" params={particlesConfig} />

      <div className="hero__content">
        <h1 className="hero__title">
          Hi, I’m <span>sumukha kb</span>
        </h1>
        <h5 className="hero__intro">Front end developer</h5>

        <button
          className="customBtn hero__btn"
          onClick={() => animateScroll.scrollToBottom()}
        >
          contact me
        </button>
      </div>
    </div>
  )
}

export default Hero
