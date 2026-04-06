import './SideNav.css'

const ITEMS = [
  'Operations & Infrastructure',
  'Bookings & Access',
  'Regulatory Reporting',
  'Revenue Recognition',
  'Profile',
] as const

type SideNavProps = {
  activeItem?: (typeof ITEMS)[number] | null
  onSelectItem?: (item: (typeof ITEMS)[number]) => void
  onSelectHome?: () => void
}

function MenuIcon() {
  return (
    <svg
      className="menu-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <line
        className="menu-icon__line"
        x1="0"
        y1="1"
        x2="20"
        y2="1"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        className="menu-icon__line menu-icon__line--mid"
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        className="menu-icon__line"
        x1="0"
        y1="19"
        x2="20"
        y2="19"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function SideNav({
  activeItem = null,
  onSelectItem,
  onSelectHome,
}: SideNavProps) {
  return (
    <aside className="side-nav" aria-label="Primary">
      <div className="side-nav__inner">
        <button
          type="button"
          className="side-nav__title-button"
          onClick={() => onSelectHome?.()}
        >
          <span className="side-nav__title">Product design</span>
        </button>
        <nav>
          <ul className="side-nav__list">
            {ITEMS.map((label) => (
              <li key={label}>
                <button
                  className={`side-nav__link${
                    activeItem === label ? ' side-nav__link--active' : ''
                  }`}
                  type="button"
                  onClick={() => onSelectItem?.(label)}
                  aria-current={activeItem === label ? 'page' : undefined}
                >
                  <MenuIcon />
                  <span className="side-nav__label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
