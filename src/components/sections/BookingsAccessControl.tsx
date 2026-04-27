import { useEffect, useState } from 'react'
import './BookingsAccessControl.css'

const HERO_FRAMES = [
  '/images/Image3a.png',
  '/images/Image3a2.png',
  '/images/Image3a3.png',
  '/images/Image3a4.png',
  '/images/Image3a5.png',
] as const

const HERO_FRAME_INTERVAL_MS = 1000

export function BookingsAccessControl() {
  const [heroFrameIndex, setHeroFrameIndex] = useState(0)

  useEffect(() => {
    HERO_FRAMES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroFrameIndex((i) => (i + 1) % HERO_FRAMES.length)
    }, HERO_FRAME_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="bookings-access" aria-labelledby="bookings-access-heading">
      <h1 id="bookings-access-heading" className="bookings-access__heading">
        Bookings & Access Control
      </h1>

      <p className="bookings-access__caption">Ecosystem • Senior Product Designer</p>

      <p className="bookings-access__summary">
        Co-working site operators lacked a clear view of space usage, making it
        difficult to optimise resource allocation and forecast demand. To solve
        that problem, we built a dedicated module for bookings which included
        space configuration, pricing, bookings, access control, and billing. As
        well as a mobile app, a door reader and digital signage.
      </p>

      <h2 className="bookings-access__subtitle">Team</h2>
      <p className="bookings-access__copy">
        _4 engineers
        <br />
        _2 product owners
        <br />
        _2 business analysts
        <br />
        _QA
        <br />
        _Solo designer
      </p>

      <h2 className="bookings-access__subtitle">Approach</h2>

      <p className="bookings-access__list-heading">Engaging with product management</p>
      <p className="bookings-access__copy">
        _Align on strategy, discuss possible approaches, risks and challenges
        <br />
        _Constant goal validation
        <br />
        _Spotting gaps and opportunities for design interventions
        <br />
      </p>

      <p className="bookings-access__list-heading">Engaging with product owners</p>
      <p className="bookings-access__copy">
        _Establish what is and what is not on scope and why
        <br />
        _Collaborate on discovery
      </p>

      <p className="bookings-access__list-heading">
        Engaging with business analysts
      </p>
      <p className="bookings-access__copy">
        _Clarify intent
        <br />
        _Shape user stories in collaboration
        <br />
        _Learn about system limitations and interactions
      </p>

      <p className="bookings-access__list-heading">Engaging with engineers</p>
      <p className="bookings-access__copy">
        _Discuss best ways to handle issues and workarounds
        <br />
        _Clarify intent
        <br />
        _Consult them during the ideation phase
        <br />
      </p>

      <p className="bookings-access__list-heading">Engaging with QA</p>
      <p className="bookings-access__copy">
        _Guide the front end QA
        <br />
        _Partner to raise bugs
        <br />
        _Sign off QA cycle
      </p>

      <figure className="bookings-access__figure">
        <img
          src={HERO_FRAMES[heroFrameIndex]}
          alt="Bookings and access mobile screen"
          className="bookings-access__image"
          decoding="async"
        />
      </figure>

      <h2 className="bookings-access__subtitle">Design objectives</h2>
      <p className="bookings-access__copy">
        _Develop a high level view of the problem and objectives
        <br />
        _Strike a balance between varying operator models and user needs
        <br />
        _Map the system to understand where the gaps and overlaps lie and act
        upon them
        <br />
        _Manage stakeholders
      </p>

      <figure className="bookings-access__figure">
        <img
          src="/images/Image3b.png"
          alt="Bookings calendar planning view"
          className="bookings-access__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="bookings-access__subtitle">How did we do</h2>
      <ul className="bookings-access__icon-list">
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-money-wings" aria-hidden />
          <span>
            Rewired micro-front ends to create a single bookings module, which
            could be sold as a stand alone product or as an add on
          </span>
        </li>
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-plant-growth" aria-hidden />
          <span>
            Built a flexible credits system so that operators can sell them on
            a recurring or one-off basis while users use them as currency
          </span>
        </li>
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-crystal-ball" aria-hidden />
          <span>
            Presented data in dashboards adapted to the user role and reports
            which are used to optimise space usage
          </span>
        </li>
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-heart" aria-hidden />
          <span>
            Access control features automated access rules and removed the need
            for users to carry a pass
          </span>
        </li>
      </ul>

      <h2 className="bookings-access__subtitle">Deployment success metrics</h2>
      <ul className="bookings-access__icon-list">
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-plant-growth" aria-hidden />
          <span>Booking utilisation increased from 7% to 13% in five months</span>
        </li>
        <li className="bookings-access__icon-list-item">
          <i className="fi fi-tr-web-statistics" aria-hidden />
          <span>65% same day bookings were self-served via the app</span>
        </li>
      </ul>

      <figure className="bookings-access__figure">
        <img
          src="/images/Image3c.png"
          alt="Bookings list and status view"
          className="bookings-access__image"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
