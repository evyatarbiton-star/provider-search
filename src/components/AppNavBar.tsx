import { NavBar, Button, Avatar } from 'glow-ds/components'
import { semanticColors as sc, fontFamilies, fontWeights, fontSizes, semanticSpacing, semanticRadii } from 'glow-ds/tokens'

// ── DS Icons ──────────────────────────────────────────────────
import ChevronDownLine from '@icons/line/ChevronDown'
import ZoeSelectedLine from '@icons/line/ZoeSelected'

// ── Token Constants ───────────────────────────────────────────
const PRIMARY_BG   = sc.primary.surface.DEFAULT        // #fd5201
const TEXT_DEFAULT = sc.neutral.text.DEFAULT             // #000000
const TEXT_DARK    = sc.neutral.text.dark                // #404040

const FONT       = fontFamilies.default
const W_MEDIUM   = fontWeights.medium
const W_REGULAR  = fontWeights.regular

const SPACE_XXXS = parseInt(semanticSpacing.xxxs)       // 4
const SPACE_XXS  = parseInt(semanticSpacing.xxs)        // 8
const SPACE_S    = parseInt(semanticSpacing.s)           // 16

const RADIUS_XXS = parseInt(semanticRadii.xxs)          // 4

// ── Healthee Logo (full SVG from DS — icon + wordmark) ───────
function HealtheeLogo() {
  return (
    <img src="/healthee-logo.svg" alt="Healthee" style={{ height: 24, width: 155, flexShrink: 0 }} />
  )
}

// ══════════════════════════════════════════════════════════════
// AppNavBar — shared navigation bar
// ══════════════════════════════════════════════════════════════

interface AppNavBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  sticky?: boolean
}

export function AppNavBar({ activeTab, onTabChange, sticky }: AppNavBarProps) {
  return (
    <NavBar
      left={
        <NavBar.Brand
          logo={<HealtheeLogo />}
          onMenuClick={() => {}}
        />
      }
      center={
        <NavBar.Tabs value={activeTab} onChange={onTabChange}>
          <NavBar.Tab value="home">Home</NavBar.Tab>
          <NavBar.Tab value="my-benefits">My Benefits</NavBar.Tab>
          <NavBar.Tab value="find-care">Find Care</NavBar.Tab>
        </NavBar.Tabs>
      }
      right={
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_S }}>
          <Button variant="outline" size="sm" pill iconLeft={<ZoeSelectedLine size="sm" />}>
            Chat with Zoe
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXXS }}>
            <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK }}>
              Home
            </span>
            <ChevronDownLine size="xs" color={TEXT_DARK} />
          </div>
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
            alt="Jane Doe"
          />
        </div>
      }
      responsive
      maxWidth={1536}
      sticky={sticky}
    />
  )
}
