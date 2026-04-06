import './RegulatoryReporting.css'

export function RegulatoryReporting() {
  return (
    <section
      className="regulatory-reporting"
      aria-labelledby="regulatory-reporting-heading"
    >
      <h1
        id="regulatory-reporting-heading"
        className="regulatory-reporting__heading"
      >
        Regulatory Reporting
      </h1>

      <p className="regulatory-reporting__caption">
        Software application (SaaS) • Principal UI/UX Designer
      </p>

      <p className="regulatory-reporting__summary">
        Post-financial crisis, with volumes of new regulations, banks needed
        entire departments to produce mandatory reports. We automated data
        gathering, allowed multiplayer reconciliation, and enforced a four-eye
        approval, increasing trust and speeding up the process.
      </p>

      <h2 className="regulatory-reporting__subtitle">Team</h2>
      <p className="regulatory-reporting__copy">
        _3 engineers
        <br />
        _1 business analyst
        <br />
        _Solo designer
      </p>

      <h2 className="regulatory-reporting__subtitle">Approach</h2>

      <p className="regulatory-reporting__list-heading">
        Engaging with stakeholders
      </p>
      <p className="regulatory-reporting__copy">
        _Scoping sessions
        <br />
        _Periodic design reviews and goal validation
      </p>

      <p className="regulatory-reporting__list-heading">
        Engaging with experts and business analysts
      </p>
      <p className="regulatory-reporting__copy">
        _1-2-1 sessions with accountants to learn reconciliation in depth
        <br />
        _Joint discovery, exploration and ideation
        <br />
        _Iterate based on their input
      </p>

      <p className="regulatory-reporting__list-heading">Engaging with engineers</p>
      <p className="regulatory-reporting__copy">
        _Learn about data workflows and database interactions
        <br />
        _Discuss possible approaches
        <br />
        _Consult them during ideation
        <br />
        _Iterate based on their input
      </p>

      <figure className="regulatory-reporting__figure">
        <img
          src="/images/Image4a.png"
          alt="Regulatory reporting adjustments table"
          className="regulatory-reporting__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="regulatory-reporting__subtitle">Design objectives</h2>
      <p className="regulatory-reporting__copy">
        _Develop an understanding of the entire process
        <br />
        _Reduce as many points of friction as possible
        <br />
        _Simplify complex tasks whilst and prevent over-engineering
        <br />
        _Manage stakeholders
        <br />
      </p>

      <figure className="regulatory-reporting__figure">
        <img
          src="/images/Image4b.png"
          alt="Regulatory reporting process grid"
          className="regulatory-reporting__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="regulatory-reporting__subtitle">How did we do</h2>
      <ul className="regulatory-reporting__icon-list">
        <li className="regulatory-reporting__icon-list-item">
          <i className="fi fi-tr-crystal-ball" aria-hidden />
          <span>
            The adjustments table gave the ability to query and clarify
            adjustments in real time and removed the need to email
          </span>
        </li>
        <li className="regulatory-reporting__icon-list-item">
          <i className="fi fi-tr-crystal-ball" aria-hidden />
          <span>Enforcing a four-eye approval increased trust in the numbers</span>
        </li>
        <li className="regulatory-reporting__icon-list-item">
          <i className="fi fi-tr-heart" aria-hidden />
          <span>The new Activity Centre displayed the state of the entire workflow</span>
        </li>
        <li className="regulatory-reporting__icon-list-item">
          <i className="fi fi-tr-money-wings" aria-hidden />
          <span>
            By adding multi player collaboration the time to completion was
            compressed
          </span>
        </li>
        <li className="regulatory-reporting__icon-list-item">
          <i className="fi fi-tr-plant-growth" aria-hidden />
          <span>
            We automated data requests, a process that was almost entirely
            manual
          </span>
        </li>
      </ul>

      <figure className="regulatory-reporting__figure">
        <img
          src="/images/Image4c.png"
          alt="Regulatory reporting configured form"
          className="regulatory-reporting__image"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
