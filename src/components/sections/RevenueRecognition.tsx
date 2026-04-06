import './RevenueRecognition.css'

export function RevenueRecognition() {
  return (
    <section
      className="revenue-recognition"
      aria-labelledby="revenue-recognition-heading"
    >
      <h1 id="revenue-recognition-heading" className="revenue-recognition__heading">
        Revenue Recognition
      </h1>

      <p className="revenue-recognition__caption">
        Software application (SaaS) • Founding Designer
      </p>

      <p className="revenue-recognition__summary">
        The financial forecasting process is often fragmented, time consuming
        and bound by strict internal controls.
        <br />
        <br />
        Our goal was to eliminate time spent reconciling spreadsheets by
        offering a real time view of forecast cash flow and recognised revenue
        at any point during the financial year.
      </p>

      <h2 className="revenue-recognition__subtitle">Team</h2>
      <p className="revenue-recognition__copy">
        _1 CTO
        <br />
        _1 technical architect
        <br />
        _2 engineers
        <br />
        _Solo designer
      </p>

      <h2 className="revenue-recognition__subtitle">Approach</h2>
      <p className="revenue-recognition__list-heading">Engaging with the CTO</p>
      <p className="revenue-recognition__copy">
        _Long sessions to understand the problem in depth
        <br />
        _Sessions to discuss strategy and approach
        <br />
        _Expectation management
      </p>

      <p className="revenue-recognition__list-heading">Engaging with engineers</p>
      <p className="revenue-recognition__copy">
        _Wear the business analyst hat to translate requirements into user
        stories
        <br />
        _Establish design foundations to guide the front end work
        <br />
        _Fix small UI bugs on code into prod
        <br />
        _Discuss features, scoping and slicing
        <br />
        _Determine 'good enough' and 'ready'
        <br />
      </p>

      <figure className="revenue-recognition__figure">
        <img
          src="/images/Image5a.png"
          alt="Revenue recognition dashboard overview"
          className="revenue-recognition__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="revenue-recognition__subtitle">Design objectives</h2>
      <p className="revenue-recognition__copy">
        _Develop a high level view of the problem and objectives
        <br />
        _Establish a design system and UI patterns
        <br />
        _Develop a good understanding of the sales flow and financial
        forecasting
        <br />
        _Decide what tradeoffs are acceptable
      </p>

      <figure className="revenue-recognition__figure">
        <img
          src="/images/Image5b.png"
          alt="Revenue recognition configuration view"
          className="revenue-recognition__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="revenue-recognition__subtitle">How did we do</h2>
      <ul className="revenue-recognition__icon-list">
        <li className="revenue-recognition__icon-list-item">
          <i className="fi fi-tr-web-statistics" aria-hidden />
          <span>
            After roughly two years, the product achieved its initial goal: it
            pulled data from multiple sources to provide a reliable, real-time
            view of recognised revenue and cash flow.
          </span>
        </li>
        <li className="revenue-recognition__icon-list-item">
          <i className="fi fi-tr-skull" aria-hidden />
          <span>
            Over time, however, more and more modules were added and the
            original value proposition became diluted. This highlighted the
            importance of defending a clear core use case, setting stricter
            scope boundaries and conducting proper research.
          </span>
        </li>
      </ul>

      <figure className="revenue-recognition__figure">
        <img
          src="/images/Image5c.png"
          alt="Revenue recognition detailed table"
          className="revenue-recognition__image"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
