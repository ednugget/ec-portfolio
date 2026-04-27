import './HomeIntro.css'

export function HomeIntro() {
  return (
    <section className="home-intro" aria-labelledby="home-intro-heading">
      <h1 id="home-intro-heading" className="home-intro__heading">
        Edna
      </h1>
      <p className="home-intro__body home-intro__body--lead">
        I am a trusted partner to product and engineering teams. I have gotten
        lots of interfaces from none to done and I love doing it.
      </p>
      <p className="home-intro__body">
        Currently exploring how and which AI tools fit into the process.
      </p>
      <div className="home-intro__video-wrap">
        <video
          className="home-intro__video"
          src="/videos/Screen1-cards.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
