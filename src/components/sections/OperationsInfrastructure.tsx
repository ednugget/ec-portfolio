import './OperationsInfrastructure.css'

export function OperationsInfrastructure() {
  return (
    <section
      className="operations-infra"
      aria-labelledby="operations-infra-heading"
    >
      <h1 id="operations-infra-heading" className="operations-infra__heading">
        Operations & Infrastructure
      </h1>

      <p className="operations-infra__caption">
        Enterprise SaaS Platform • Senior Product Designer
      </p>

      <p className="operations-infra__summary">
        The commercial real estate landscape shifted toward service-oriented,
        experience-led operations. The platform we built, connected clients to
        spaces and services, enabling operators to improve their CX and DX, and
        to vastly improve space utilisation.
      </p>

      <h2 className="operations-infra__subtitle">Team</h2>
      <p className="operations-infra__copy">
        _20 engineers
        <br />
        _5 product owners
        <br />
        _5 business analysts
        <br />
        _5 QA
        <br />
        _Solo designer
      </p>

      <h2 className="operations-infra__subtitle">Approach</h2>

      <p className="operations-infra__list-heading">Engaging with product management</p>
      <p className="operations-infra__copy">
        _Discuss how to phase features, what to include and what to exclude
        <br />
        _Decide what is the best approach to land a &lsquo;business
        requirement&rsquo;
        <br />
        _Figure out how to translate product strategy into action
      </p>

      <p className="operations-infra__list-heading">Engaging with product owners</p>
      <p className="operations-infra__copy">
        _Come up with the best solution to a problem considering effort,
        timelines, resources
        <br />
        _Determine what is a 'must have' and a 'nice to have'
        <br />
        _Determine when is the feature ready for hand over
        <br />
        _Determine when is the feature done
      </p>

      <p className="operations-infra__list-heading">Engaging with business analysts</p>
      <p className="operations-infra__copy">
        _Share understanding - discussing their flow diagramsa
        <br />
        _Share understanding - sketch flows and interactions to clarify intent
        <br />
        _Learn the what is handled in the front and back ends
      </p>

      <p className="operations-infra__list-heading">Engaging with engineers</p>
      <p className="operations-infra__copy">
        _Discuss the plan for the back end and front end
        <br />
        _Understand the interactions between systems (especially asynchronous)
        <br />
        _Discuss components and patterns, interactions and micro-interactions
        <br />
        _Consult on the feasibility of processes/tasks
      </p>

      <p className="operations-infra__list-heading">Engaging with QA</p>
      <p className="operations-infra__copy">
        _Partner to guide front end QA
        <br />
        _Partner to raise bugs not related to functionality
        <br />
        _Sign off QA cycle
      </p>

      <p className="operations-infra__list-heading">Engaging with delivery management</p>
      <p className="operations-infra__copy">
        _Negotiate what could and must be included in the allocated time for
        each feature
        <br />
        _Discuss where to draw the line on 'MVP'
        <br />
        _Discuss what to reuse / repurpose to speed up feature delivery
      </p>

      <figure className="operations-infra__figure">
        <img
          src="/images/Image2a.png"
          alt="Operations workspace overview"
          className="operations-infra__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="operations-infra__subtitle">Design objectives</h2>
      <p className="operations-infra__copy">
        _Understand the problem that must be solved / find the solution
        <br />
        _Understand user needs and strive to make their life easier
        <br />
        _Action product / engineering&apos;s input without losing sight of the users
        <br />
        _Simplify complex tasks
        <br />
        _Balance business objectives with user needs
      </p>

      <figure className="operations-infra__figure">
        <img
          src="/images/Image2b.png"
          alt="Operations records and filters view"
          className="operations-infra__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="operations-infra__subtitle">How did we do</h2>
      <ul className="operations-infra__icon-list">
        <li className="operations-infra__icon-list-item">
          <i className="fi fi-tr-money-wings" aria-hidden />
          <span>
            Onboarding redesign reduced process times from hours to five
            minutes
          </span>
        </li>
        <li className="operations-infra__icon-list-item">
          <i className="fi fi-tr-money-wings" aria-hidden />
          <span>
            Self serve journeys saved team saved hundreds of hours of internal
            services
          </span>
        </li>
        <li className="operations-infra__icon-list-item">
          <i className="fi fi-tr-crystal-ball" aria-hidden />
          <span>
            The network status became visible in the new dashboard, giving
            operators a chance to anticipate and mitigate disruptions
          </span>
        </li>
        <li className="operations-infra__icon-list-item">
          <i className="fi fi-tr-plant-growth" aria-hidden />
          <span>
            The space config module gave operators a digital twin of their site
            and the ability to set it up and manage it without professional
            services
          </span>
        </li>
        <li className="operations-infra__icon-list-item">
          <i className="fi fi-tr-heart" aria-hidden />
          <span>
            A new support feature improved troubleshooting and comms for all
            parties
          </span>
        </li>
      </ul>

      <figure className="operations-infra__figure">
        <img
          src="/images/Image2c.png"
          alt="Operations outcomes dashboard"
          className="operations-infra__image"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
