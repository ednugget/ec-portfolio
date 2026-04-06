import './ProfileSection.css'

export function ProfileSection() {
  return (
    <section className="profile-section" aria-labelledby="profile-section-heading">
      <h1 id="profile-section-heading" className="profile-section__heading">
        Profile
      </h1>

      <p className="profile-section__caption">Design is the constant</p>

      <p className="profile-section__summary">
        I have held lots of roles and held lots of hats in smaller teams,
        partnering with cross-functional stakeholders and engineers to turn
        complex requirements into shippable solutions. My most developed skill
        is intuition. I understand the technical implications of a design and
        can balance process with real world constrains. I adapt to fit each
        team and the business needs.
        <br />
        <br />
        I have a Graphic Design background, and I love drawing icons and adding
        motion and doing illustrations where possible. I tend to bring humour
        into the process. My colleagues refer to what I do as "edna's magic".
        <br />
        <br />
        I try to keep a beginner mindset and constantly sign up to learn new
        things. Currently learning vibe coding with
        Figma+Cursor+Supabase+Github+Netlify
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
      <p className="profile-section__copy">
        <a
          className="profile-section__link"
          href="https://www.linkedin.com/in/ednacalvo/"
          target="_blank"
          rel="noreferrer"
        >
          Linked in
        </a>
      </p>
      <p className="profile-section__copy">
        <a
          className="profile-section__link"
          href="https://dribbble.com/ednugget"
          target="_blank"
          rel="noreferrer"
        >
          Dribble
        </a>
      </p>
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
    </section>
  )
}
