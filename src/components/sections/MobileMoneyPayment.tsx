import './MobileMoneyPayment.css'

export function MobileMoneyPayment() {
  return (
    <section
      className="mobile-money"
      aria-labelledby="mobile-money-heading"
    >
      <h1 id="mobile-money-heading" className="mobile-money__heading">
        Mobile Money Payments - low literacy
      </h1>

      <p className="mobile-money__caption">KaiOS app • Designer</p>

      <p className="mobile-money__summary">
        West African agribusinesses are paying farmers by mobile money — but
        the cash-out experience runs on USSD: dial codes, French text menus,
        60-second session timeouts. It works on any phone. KaiOS smart feature
        phones (Nokia 3310 4G, ~£35) offer a better surface: physical keypad,
        full-colour screen, app runtime — without requiring a smartphone or
        data literacy.
      </p>

      <h2 className="mobile-money__subtitle">Team</h2>
      <p className="mobile-money__copy">
        _Claude AI
        <br />
        _Solo designer
      </p>

      <h2 className="mobile-money__subtitle">Problem statement</h2>
      <p className="mobile-money__copy">
        The existing cash-out flow assumes the user can read French under time
        pressure, at a public agent stall, on a screen the size of a credit
        card. Most rural first-time users cannot complete it without help.
      </p>

      <h2 className="mobile-money__subtitle">Goal</h2>
      <p className="mobile-money__copy">
        Design a cash-out flow that minimises reading load at every step —
        short labels, large icons, pre-filled defaults — so that the only
        moment requiring full attention is the one that matters: a single
        high-contrast code the agent types while the farmer watches.
      </p>

      <figure className="mobile-money__figure">
        <img
          src="/images/CS07-NokiaPhone.png"
          alt="Nokia 3310 4G KaiOS feature phone"
          className="mobile-money__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="mobile-money__subtitle">Personas</h2>

      <p className="mobile-money__list-heading">
        Moussa, 34 — Cocoa farmer, Bouaflé region, Côte d'Ivoire
      </p>
      <p className="mobile-money__copy">
        Grows cocoa on a 2-hectare family plot. Sells through a cooperative
        that has just started paying via mobile money. Owns a Nokia feature
        phone, uses it for calls and SMS. First mobile money payment arrives
        this harvest season. Speaks Baoulé at home, basic conversational
        French. Has never navigated a USSD menu alone.
      </p>

      <p className="mobile-money__list-heading">
        Fatou, 28 — Mobile money agent, market town, 12km from Moussa's
        village
      </p>
      <p className="mobile-money__copy">
        Runs a small airtime and mobile money kiosk at the weekly market.
        Registered Orange Money and Wave agent. Processes 20–40 transactions
        on a busy day. Knows the agent app well but has no control over what
        the customer's phone shows them. On harvest day, her float runs out by
        midday.
      </p>

      <h2 className="mobile-money__subtitle">Cashing out</h2>
      <p className="mobile-money__list-heading">Payment notification</p>
      <p className="mobile-money__copy">
        This screen interrupts whatever Moussa is doing — including if the
        phone is idle/locked.
      </p>

      <figure className="mobile-money__figure">
        <img
          src="/images/CS07_Notification.png"
          alt="KaiOS incoming mobile money payment notification"
          className="mobile-money__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="mobile-money__subtitle">Cashing out</h2>
      <p className="mobile-money__list-heading">
        Critical flow - A four screen journey
      </p>
      <p className="mobile-money__copy">
        Moussa has received a payment notification and wants to convert it to
        cash. This flow takes him from initiating the withdrawal through to
        handing the agent a code and receiving notes in his hand. Every design
        decision in this flow optimises for one thing: getting to &lt;Show
        Code&gt; as fast as possible with as few literacy barriers as
        possible.
      </p>

      <figure className="mobile-money__figure">
        <img
          src="/images/CS07-Payment.png"
          alt="Four-screen cash-out flow for KaiOS"
          className="mobile-money__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="mobile-money__subtitle">Cashing out</h2>
      <p className="mobile-money__list-heading">Failing gracefully</p>
      <p className="mobile-money__copy">
        Never strand the user on a blank or broken screen. Every failure has a
        human-readable message, an escape route, and — where possible — a
        suggestion of what to do next.
      </p>

      <figure className="mobile-money__figure">
        <img
          src="/images/CS07-Errors.png"
          alt="Error states across the cash-out flow"
          className="mobile-money__image"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <h2 className="mobile-money__subtitle">Onboarding</h2>
      <p className="mobile-money__list-heading">Assumptions</p>
      <p className="mobile-money__copy">
        The farmer has a KaiOS phone (increasingly common as Nokia 3310 4G
        etc. get cheaper). App handles: incoming payment notification, balance
        display, cash-out code generation (QR or numeric), agent locator.
        <br />
        <br />
        This is the registration bridge — the app sends an SMS in the
        background to link the phone number to the Orange Money / MTN
        account.
      </p>

      <figure className="mobile-money__figure">
        <img
          src="/images/CS07-Onboarding.png"
          alt="Onboarding and registration screens"
          className="mobile-money__image"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
