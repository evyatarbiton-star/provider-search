import { useState } from 'react'
import { ProviderSearchResults } from './pages/ProviderSearchResults'
import { LayoutExperiment } from './pages/LayoutExperiment'
import { Experiment2 } from './pages/Experiment2'
import { Experiment3 } from './pages/Experiment3'
import { Experiment4 } from './pages/Experiment4'
import { Experiment5 } from './pages/Experiment5'
import { Experiment6 } from './pages/Experiment6'
import { Experiment7 } from './pages/Experiment7'
import { Experiment8 } from './pages/Experiment8'
import { Experiment9 } from './pages/Experiment9'
import { Experiment10 } from './pages/Experiment10'
import { Experiment11 } from './pages/Experiment11'
import { semanticColors as sc, fontFamilies, fontWeights, fontSizes } from 'glow-ds/tokens'
import './index.css'

type Page = 'original' | 'experiment' | 'experiment2' | 'experiment3' | 'experiment4' | 'experiment5' | 'experiment6' | 'experiment7' | 'experiment8' | 'experiment9' | 'experiment10' | 'experiment11'

function getPageFromHash(): Page {
  const hash = window.location.hash
  if (hash === '#experiment11') return 'experiment11'
  if (hash === '#experiment10') return 'experiment10'
  if (hash === '#experiment9') return 'experiment9'
  if (hash === '#experiment8') return 'experiment8'
  if (hash === '#experiment7') return 'experiment7'
  if (hash === '#experiment6') return 'experiment6'
  if (hash === '#experiment5') return 'experiment5'
  if (hash === '#experiment4') return 'experiment4'
  if (hash === '#experiment3') return 'experiment3'
  if (hash === '#experiment2') return 'experiment2'
  if (hash === '#experiment') return 'experiment'
  return 'original'
}

const NAV_ITEMS: { page: Page; hash: string; label: string }[] = [
  { page: 'original', hash: '#', label: 'All use cases' },
  { page: 'experiment', hash: '#experiment', label: 'Experiment 1' },
  { page: 'experiment2', hash: '#experiment2', label: 'Experiment 2' },
  { page: 'experiment3', hash: '#experiment3', label: 'Experiment 3' },
  { page: 'experiment4', hash: '#experiment4', label: 'Experiment 4' },
  { page: 'experiment5', hash: '#experiment5', label: 'Experiment 5' },
  { page: 'experiment6', hash: '#experiment6', label: 'Experiment 6' },
  { page: 'experiment7', hash: '#experiment7', label: 'Experiment 7' },
  { page: 'experiment8', hash: '#experiment8', label: 'Experiment 8' },
  { page: 'experiment9', hash: '#experiment9', label: 'Experiment 9' },
  { page: 'experiment10', hash: '#experiment10', label: 'Experiment 10' },
  { page: 'experiment11', hash: '#experiment11', label: 'Experiment 11' },
]

function PageNav({ current }: { current: Page }) {
  return (
    <div
      className="page-nav-wrapper"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2000 }}
      onMouseEnter={(e) => {
        const nav = e.currentTarget.querySelector('.page-nav-bar') as HTMLElement
        if (nav) nav.style.transform = 'translateY(0)'
      }}
      onMouseLeave={(e) => {
        const nav = e.currentTarget.querySelector('.page-nav-bar') as HTMLElement
        if (nav) nav.style.transform = 'translateY(100%)'
      }}
    >
    {/* Invisible hover zone */}
    <div style={{ height: 12 }} />
    <div
      className="page-nav-bar"
      style={{
      background: sc.neutral.surface.subtle,
      borderTop: `1px solid ${sc.neutral.border.light}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 24, padding: '6px 16px',
      transform: 'translateY(100%)',
      transition: 'transform 0.25s ease',
    }}>
      {NAV_ITEMS.map(item => (
        <a
          key={item.page}
          href={item.hash}
          style={{
            fontFamily: fontFamilies.default,
            fontWeight: current === item.page ? fontWeights.medium : fontWeights.regular,
            fontSize: fontSizes[12],
            color: current === item.page ? sc.neutral.text.DEFAULT : sc.neutral.text.light,
            textDecoration: 'none',
            padding: '2px 0',
            borderBottom: current === item.page ? `2px solid ${sc.neutral.text.DEFAULT}` : '2px solid transparent',
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash)

  window.onhashchange = () => setPage(getPageFromHash())

  const pages: Record<Page, JSX.Element> = {
    original: <ProviderSearchResults />,
    experiment: <LayoutExperiment />,
    experiment2: <Experiment2 />,
    experiment3: <Experiment3 />,
    experiment4: <Experiment4 />,
    experiment5: <Experiment5 />,
    experiment6: <Experiment6 />,
    experiment7: <Experiment7 />,
    experiment8: <Experiment8 />,
    experiment9: <Experiment9 />,
    experiment10: <Experiment10 />,
    experiment11: <Experiment11 />,
  }

  return (
    <>
      {pages[page]}
      <PageNav current={page} />
    </>
  )
}

export default App
