import './ProfileSection.css'

export function ProfileSection() {
  return (
    <section className="profile-section" aria-labelledby="profile-section-heading">
      <h1 id="profile-section-heading" className="profile-section__heading">
        Profile
      </h1>

      <p className="profile-section__caption">Design is the constant</p>

      <p className="profile-section__summary">
        I have held lots of hats in many teams, partnering with cross-functional
        stakeholders and engineers to turn complex requirements into shippable
        solutions. My most developed skill is intuition. I understand the
        technical implications of a design and can balance process with real
        world constrains.
        <br />
        <br />
        I tend to bring humour into the process and try to keep a beginner
        mindset - constantly learning new tricks (currently that's vibe
        coding). My colleagues refer to what I do as "edna's magic".
        <br />
        <br />
        Outside work, I like gymming, rock climbing, cooking, reading and
        doing art. My holidays are generally spent playing in the mountains.
      </p>

      <h2 className="profile-section__subtitle">Timeline</h2>

      <p className="profile-section__list-heading">
        2020 - 2026 • essensys plc • Senior Product Designer
      </p>
      <p className="profile-section__copy">SaaS platform | Mobile app</p>
      <p className="profile-section__separator">|</p>

      <p className="profile-section__list-heading">
        2016 - 2020 • Convendia • Founding Designer
      </p>
      <p className="profile-section__copy">SaaS portal | Start up</p>
      <p className="profile-section__separator">|</p>

      <p className="profile-section__list-heading">
        2014 - 2016 • Hivedome Senior • UI/UX Designer
      </p>
      <p className="profile-section__copy">UI Redesign | Contract</p>
      <p className="profile-section__separator">|</p>

      <p className="profile-section__list-heading">
        2013 - 2014 • Lombard Risk • Principal UI/UX Designer
      </p>
      <p className="profile-section__copy">SaaS | Fintech</p>
      <p className="profile-section__separator">|</p>

      <p className="profile-section__list-heading">
        2011 - 2012 • BSkyB • UI/UX Designer
      </p>
      <p className="profile-section__copy">UI Redesign | Contract</p>

      <h2 className="profile-section__subtitle">Get in touch</h2>
      <ul className="profile-section__socials">
        <li>
          <a
            className="profile-section__icon-link profile-section__icon-link--linkedin"
            href="https://www.linkedin.com/in/ednacalvo/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          />
        </li>
        <li>
          <a
            className="profile-section__icon-link profile-section__icon-link--dribbble"
            href="https://dribbble.com/ednugget"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
          />
        </li>
        <li>
          <a
            className="profile-section__icon-link profile-section__icon-link--instagram"
            href="https://www.instagram.com/ednlightened?igsh=ZTl2MWZybG9sczc3&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          />
        </li>
        <li>
          <a
            className="profile-section__icon-link profile-section__icon-link--goodreads"
            href="https://www.goodreads.com/user/show/7760648"
            target="_blank"
            rel="noreferrer"
            aria-label="Goodreads"
          />
        </li>
      </ul>
      <p className="profile-section__copy">
        <a
          className="profile-section__link"
          href="mailto:edna.calvo@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </p>
      <p className="profile-section__test">
        Vibecoded in Cursor. Uicons by{' '}
        <a
          className="profile-section__test-link"
          href="https://www.flaticon.com/uicons"
          target="_blank"
          rel="noreferrer"
        >
          Flaticon
        </a>
      </p>
    </section>
  )
}
