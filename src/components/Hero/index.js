import React, { PropTypes } from "react"

import styles from "./index.css"

const Hero = (props) => (
    <div
        className={ styles.heroContainer }
        style={ props.backgroundImage && {
            background: `#111 url(${ props.backgroundImage }) 50% 50% / cover`,
          } }
    >
        <h1 className={ styles.h }>{ props.heading }</h1>
        <p className={ styles.p }>{ props.paragraph }</p>
    </div>
)

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
}

export default Hero