import { useState } from 'react'
import { SideNav } from './components/layout/SideNav'
import { HomeIntro } from './components/sections/HomeIntro'
import { OperationsInfrastructure } from './components/sections/OperationsInfrastructure'
import { BookingsAccessControl } from './components/sections/BookingsAccessControl'
import { RegulatoryReporting } from './components/sections/RegulatoryReporting'
import { RevenueRecognition } from './components/sections/RevenueRecognition'
import { MobileMoneyPayment } from './components/sections/MobileMoneyPayment'
import { ProfileSection } from './components/sections/ProfileSection'

const OPS_INFRA_LABEL = 'Operations & Infrastructure' as const
const BOOKINGS_LABEL = 'Bookings & Access' as const
const REG_REPORTING_LABEL = 'Regulatory Reporting' as const
const REVENUE_LABEL = 'Revenue Recognition' as const
const MOBILE_MONEY_LABEL = 'Mobile Money Payments' as const
const PROFILE_LABEL = 'Profile' as const

function App() {
  const [activeScreen, setActiveScreen] = useState<
    | 'home'
    | 'operations'
    | 'bookings'
    | 'regulatory'
    | 'revenue'
    | 'mobileMoney'
    | 'profile'
  >('home')

  const handleSelectItem = (
    item:
      | typeof OPS_INFRA_LABEL
      | typeof BOOKINGS_LABEL
      | typeof REG_REPORTING_LABEL
      | typeof REVENUE_LABEL
      | typeof MOBILE_MONEY_LABEL
      | typeof PROFILE_LABEL
      | string,
  ) => {
    if (item === OPS_INFRA_LABEL) {
      setActiveScreen('operations')
      return
    }

    if (item === BOOKINGS_LABEL) {
      setActiveScreen('bookings')
      return
    }

    if (item === REG_REPORTING_LABEL) {
      setActiveScreen('regulatory')
      return
    }

    if (item === REVENUE_LABEL) {
      setActiveScreen('revenue')
      return
    }

    if (item === MOBILE_MONEY_LABEL) {
      setActiveScreen('mobileMoney')
      return
    }

    if (item === PROFILE_LABEL) {
      setActiveScreen('profile')
    }
  }

  const activeNavItem =
    activeScreen === 'operations'
      ? OPS_INFRA_LABEL
      : activeScreen === 'bookings'
        ? BOOKINGS_LABEL
        : activeScreen === 'regulatory'
          ? REG_REPORTING_LABEL
          : activeScreen === 'revenue'
            ? REVENUE_LABEL
            : activeScreen === 'mobileMoney'
              ? MOBILE_MONEY_LABEL
              : activeScreen === 'profile'
                ? PROFILE_LABEL
                : null

  return (
    <div className="portfolio-shell">
      <SideNav
        activeItem={activeNavItem}
        onSelectItem={handleSelectItem}
        onSelectHome={() => setActiveScreen('home')}
      />
      <main className="content-pane">
        {activeScreen === 'operations' ? (
          <OperationsInfrastructure />
        ) : activeScreen === 'bookings' ? (
          <BookingsAccessControl />
        ) : activeScreen === 'regulatory' ? (
          <RegulatoryReporting />
        ) : activeScreen === 'revenue' ? (
          <RevenueRecognition />
        ) : activeScreen === 'mobileMoney' ? (
          <MobileMoneyPayment />
        ) : activeScreen === 'profile' ? (
          <ProfileSection />
        ) : (
          <HomeIntro />
        )}
      </main>
    </div>
  )
}

export default App
