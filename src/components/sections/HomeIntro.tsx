import './HomeIntro.css'
import { useState } from 'react'

export function HomeIntro() {
  const [isHoveringIllustration, setIsHoveringIllustration] = useState(false)
  const [isDrifting, setIsDrifting] = useState(false)

  const handleIllustrationEnter = () => {
    setIsHoveringIllustration(true)
    setIsDrifting(true)
  }

  const handleIllustrationLeave = () => {
    setIsHoveringIllustration(false)
  }

  const handleAnimationIteration = () => {
    if (!isHoveringIllustration) {
      setIsDrifting(false)
    }
  }

  return (
    <section className="home-intro" aria-labelledby="home-intro-heading">
      <h1 id="home-intro-heading" className="home-intro__heading">
        Edna
      </h1>
      <p className="home-intro__body">
        I am a trusted partner to product and engineering teams. I have gotten
        lots of interfaces from none to done and I love doing it. Currently
        riding the AI wave as gracefully as possible.
      </p>
      <div className="home-intro__illustration">
        <img
          className={`home-intro__illustration-img${isDrifting ? ' is-drifting' : ''}`}
          src="/images/icosaedro.svg"
          alt=""
          width={520}
          height={520}
          decoding="async"
          onMouseEnter={handleIllustrationEnter}
          onMouseLeave={handleIllustrationLeave}
          onAnimationIteration={handleAnimationIteration}
        />
      </div>
    </section>
  )
}
