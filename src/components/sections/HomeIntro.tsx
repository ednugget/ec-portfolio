import './HomeIntro.css'

export type HomeIntroTarget =
  | 'operations'
  | 'bookings'
  | 'regulatory'
  | 'revenue'
  | 'mobileMoney'

type HomeIntroProps = {
  onNavigate: (screen: HomeIntroTarget) => void
}

const CARDS: Array<{
  modifier: string
  src: string
  label: string
  target: HomeIntroTarget
}> = [
  {
    modifier: 'c1',
    src: '/images/Card1.svg',
    label: 'Mobile Money Payments',
    target: 'mobileMoney',
  },
  {
    modifier: 'c2',
    src: '/images/Card2.svg',
    label: 'Regulatory Reporting',
    target: 'regulatory',
  },
  {
    modifier: 'c3',
    src: '/images/Card3.svg',
    label: 'Operations & Infrastructure',
    target: 'operations',
  },
  {
    modifier: 'c4',
    src: '/images/Card4.svg',
    label: 'Bookings & Access',
    target: 'bookings',
  },
  {
    modifier: 'c5',
    src: '/images/Card5.svg',
    label: 'Revenue Recognition',
    target: 'revenue',
  },
]

export function HomeIntro({ onNavigate }: HomeIntroProps) {
  return (
    <section className="home-intro" aria-labelledby="home-intro-heading">
      <h1 id="home-intro-heading" className="home-intro__heading">
        Edna
      </h1>
      <p className="home-intro__body home-intro__body--lead">
        I am a trusted partner to product and engineering teams. I have gotten
        lots of interfaces from none to done and I love doing it.
      </p>
      <p className="home-intro__body home-intro__body--muted">
        Currently exploring how and which AI tools fit into the process.
      </p>
      <div className="home-intro__cards" role="list">
        {CARDS.map((card) => (
          <button
            key={card.modifier}
            type="button"
            role="listitem"
            aria-label={card.label}
            onClick={() => onNavigate(card.target)}
            className={`home-intro__card home-intro__card--${card.modifier}`}
          >
            <img
              src={card.src}
              alt=""
              className="home-intro__card-img"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
