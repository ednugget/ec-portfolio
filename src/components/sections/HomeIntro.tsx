import './HomeIntro.css'
import card1Svg from '../../assets/cards/Card1.svg?raw'
import card2Svg from '../../assets/cards/Card2.svg?raw'
import card3Svg from '../../assets/cards/Card3.svg?raw'
import card4Svg from '../../assets/cards/Card4.svg?raw'
import card5Svg from '../../assets/cards/Card5.svg?raw'

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
  svg: string
  label: string
  target: HomeIntroTarget
}> = [
  {
    modifier: 'c1',
    svg: card1Svg,
    label: 'Mobile Money Payments',
    target: 'mobileMoney',
  },
  {
    modifier: 'c2',
    svg: card2Svg,
    label: 'Regulatory Reporting',
    target: 'regulatory',
  },
  {
    modifier: 'c3',
    svg: card3Svg,
    label: 'Operations & Infrastructure',
    target: 'operations',
  },
  {
    modifier: 'c4',
    svg: card4Svg,
    label: 'Bookings & Access',
    target: 'bookings',
  },
  {
    modifier: 'c5',
    svg: card5Svg,
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
            <span
              className="home-intro__card-img"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: card.svg }}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
