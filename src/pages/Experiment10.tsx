import React, { useState, useEffect, useRef } from 'react'
import { Button, TextInput, Select, RadioButton, Checkbox, Toggle, ProviderCard, Modal, IconButton, StarRating, DatePicker } from 'glow-ds/components'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { semanticColors as sc, primitiveColors as pc, primitiveShadows, fontFamilies, fontWeights, fontSizes, semanticSpacing, semanticRadii } from 'glow-ds/tokens'

// ── DS Icons ──────────────────────────────────────────────────
import SearchLine from '@icons/line/Search'
import FilterLine from '@icons/line/Filter'
import ChevronDownLine from '@icons/line/ChevronDown'
import LocationLine from '@icons/line/Location'
import CloseLine from '@icons/line/Close'
import HomeLine from '@icons/line/Home'
import HospitalBuildingLine from '@icons/line/HospitalBuilding'
import MapLine from '@icons/line/Map'
import ExpandLine from '@icons/line/Expand'
import CheckCrFrLine from '@icons/line/CheckCrFr'
import NetworkTierCoin from '@icons/specialty/NetworkTierCoin'
import TelehealthIcon from '@icons/specialty/Telehealth'
import DentistIcon from '@icons/specialty/Dentist'
import SpecialistIcon from '@icons/specialty/Specialist'
import ObGynIcon from '@icons/specialty/ObGyn'
import OncologistIcon from '@icons/specialty/Oncologist'
import PrimaryCareIcon from '@icons/specialty/PrimaryCare'
import DermatologyIcon from '@icons/specialty/Dermatology'
import UrgentCareIcon from '@icons/specialty/UrgentCare'

import { AppNavBar } from '../components/AppNavBar'

// ── Token Constants ───────────────────────────────────────────
const BG_WHITE       = sc.neutral.surface.negative       // #ffffff
const BG_SUBTLE      = sc.neutral.surface.subtle         // #f2f2f2
const TEXT_DEFAULT   = sc.neutral.text.DEFAULT            // #000000
const TEXT_DARK      = sc.neutral.text.dark               // #404040
const TEXT_LIGHT     = sc.neutral.text.light              // #8a8a8a
const BORDER_LIGHT   = sc.neutral.border.light            // #ededed
const BORDER_STRONG  = sc.neutral.border.strong           // #e0e0e0
const PRIMARY_BG     = sc.primary.surface.DEFAULT         // #fd5201
const BANNER_BG     = sc['accent-yellow'].surface.subtle   // warm cream for powered-by banner
const SUCCESS_TEXT  = sc.success.text.DEFAULT              // #5bb95e
const BLUE_SUBTLE   = sc['accent-blue'].surface.subtle     // #f5f8ff
const ERROR_TEXT    = sc.error.text.DEFAULT                 // red for required asterisk

const SPACE_XXS  = parseInt(semanticSpacing.xxs)   // 8
const SPACE_XS   = parseInt(semanticSpacing.xs)    // 12
const SPACE_S    = parseInt(semanticSpacing.s)      // 16
const SPACE_M    = parseInt(semanticSpacing.m)      // 20
const SPACE_L    = parseInt(semanticSpacing.l)      // 24
const SPACE_XL   = parseInt(semanticSpacing.xl)     // 32
const SPACE_XXL  = parseInt(semanticSpacing.xxl)    // 40
const SPACE_XXXL = parseInt(semanticSpacing.xxxl)   // 48
const SPACE_5XL  = parseInt(semanticSpacing['5xl']) // 72

const RADIUS_XS   = parseInt(semanticRadii.xs)     // 12
const RADIUS_FULL = parseInt(semanticRadii.full)   // 999

const SIDEBAR_W      = 358
const SIDEBAR_BP     = 1024

const FONT    = fontFamilies.default
const FONT_DISPLAY = fontFamilies.display
const W_MEDIUM = fontWeights.medium
const W_REGULAR = fontWeights.regular

const BLUE_500    = pc.blue[500]      // #245eff
const GREEN_200   = pc.green[200]     // #c2e5c3
const RED_100     = pc.red[100]       // #fcd9d9
const BLUE_100    = pc.blue[100]      // #ebf0ff
const SHADOW_CARD = primitiveShadows.card
const RADIUS_XXS  = parseInt(semanticRadii.xxs)  // 8
const RADIUS_XXXS = parseInt(semanticRadii.xxxs) // 4
const WARNING_BG  = sc['accent-yellow'].surface.subtle
const WARNING_BORDER = pc.yellow[300]

// ── Scenario System ──────────────────────────────────────────
type ScenarioId = 'copay-flat' | 'coinsurance-range' | 'copay-coinsurance' | 'meet-deductible' | 'not-covered' | 'copay-subject-deductible' | 'fully-covered-after-ded' | 'fully-covered-before-ded' | 'fully-covered-oop-max' | 'not-connected' | 'deductible-na' | 'rbp' | 'indemnity'

interface ScenarioConfig {
  id: ScenarioId
  label: string
  description: string
  costBox: {
    type: 'range-graph' | 'flat-cost' | 'zero-cost' | 'not-connected' | 'market-price' | 'market-price-rbp' | 'market-price-indemnity' | 'market-price-ded-na'
    // For range-graph type:
    typicalRange?: string
    typicalLow?: string
    typicalHigh?: string
    rangeLow?: string
    rangeHigh?: string
    subtitle?: string
    // For flat-cost type:
    flatCost?: string
    flatAfterCost?: string  // e.g. "per visit" or "for this service\nsince you've met your deductible"
    flatLabel?: string      // subtitle below
    // For zero-cost type:
    zeroReason?: string
    // For market-price types:
    priceRange?: string
    explanation?: string
    explanationLine1?: string
    explanationLink?: string
    // Not-connected subtitle:
    connectSubtitle?: string
  }
  modal: {
    plan: string
    network: string
    deductible?: string
    deductibleMet?: boolean
    coverageRows: { label: string; value: string; hasCheck?: boolean }[]
    explanation: string
    beforeInsurance?: string
    afterInsurance?: string
    afterInsuranceColor?: string
    costPercent?: string
    showGraph?: boolean
    graphRangeLow?: string
    graphRangeHigh?: string
  } | null
  providers: any[]
  networkDropdown?: 'indemnity'
}

const PROVIDERS_CONNECTED = [
  {
    name: 'Dr. Emily Park',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.3 miles',
    address: '161 Madison Ave, New York, NY',
    rating: 4.6,
    reviewCount: 245,
    cost: '$750',
    costLevel: 'lower' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. James Rodriguez',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.8 miles',
    address: '30 E 40th St, New York, NY',
    rating: 4.2,
    reviewCount: 178,
    cost: '$1,200',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Tomorrow, May 8',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Optometrist',
    providerType: 'female' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 4.8,
    reviewCount: 412,
    cost: '$1,600',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Thu, May 9',
  },
  {
    name: 'Dr. Omar Hassan',
    specialty: 'Dermatologist',
    providerType: 'male' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '1.5 miles',
    address: '425 W 59th St, New York, NY',
    rating: 3.9,
    reviewCount: 89,
    cost: '$2,100',
    costLevel: 'higher' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Mon, May 12',
  },
  {
    name: 'Dr. Benjamin Lee',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '2.1 miles',
    address: '635 Madison Ave, New York, NY',
    rating: 4.5,
    reviewCount: 156,
    cost: '$2,650',
    costLevel: 'higher' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Wed, May 14',
  },
  {
    name: 'Manhattan Eye Center',
    specialty: 'Retinal imaging center',
    providerType: 'facility' as const,
    networkTier: 'out-of-network' as const,
    networkLabel: 'Out-of-Network',
    distance: '0.9 miles',
    address: '100 E 77th St, Lower Level, New York, NY 10075',
    rating: 4.3,
    reviewCount: 67,
    cost: '$3,200',
    costLevel: 'higher' as const,
  },
  {
    name: 'Dr. Lisa Wang',
    specialty: 'Dermatologist',
    providerType: 'female' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '1.2 miles',
    address: '1250 Broadway, New York, NY',
    rating: 4.1,
    reviewCount: 320,
    cost: '$1,400–$3,200',
    costLevel: 'unknown' as const,
    costLabel: 'Call to verify out-of-pocket cost',
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Thu, May 9',
  },
  {
    name: 'Midtown Dermatology Group',
    specialty: 'Dermatology clinic',
    providerType: 'facility' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '1.5 miles',
    address: '110 E 59th St, Suite 10B, New York, NY',
    rating: 3.7,
    reviewCount: 142,
    cost: '$1,100–$2,800',
    costLevel: 'unknown' as const,
    costLabel: 'Call to verify out-of-pocket cost',
  },
]

// Copay flat — all providers show "$40 Per visit", no badge
const PROVIDERS_COPAY_FLAT = [
  { name: 'Dr. Emily Park', specialty: 'Dentist', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.3 miles', address: '161 Madison Ave, New York, NY', rating: 4.6, reviewCount: 245, cost: '$45', costLabel: 'Per visit', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Today, May 7' },
  { name: 'Dr. James Rodriguez', specialty: 'Dentist', photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face', networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.8 miles', address: '30 E 40th St, New York, NY', rating: 4.2, reviewCount: 178, cost: '$45', costLabel: 'Per visit', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Tomorrow, May 8' },
  { name: 'Dr. Priya Sharma', specialty: 'Dentist', providerType: 'female' as const, networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.5 miles', address: '457 Broome St, New York, NY', rating: 4.8, reviewCount: 412, cost: '$45', costLabel: 'Per visit', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Thu, May 9' },
  { name: 'Dr. Omar Hassan', specialty: 'Dentist', providerType: 'male' as const, networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '1.5 miles', address: '425 W 59th St, New York, NY', rating: 3.9, reviewCount: 89, cost: '$45', costLabel: 'Per visit', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Mon, May 12' },
  { name: 'Dr. Benjamin Lee', specialty: 'Dentist', photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face', networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '2.1 miles', address: '635 Madison Ave, New York, NY', rating: 4.5, reviewCount: 156, cost: '$45', costLabel: 'Per visit', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Wed, May 14' },
]

// Fully covered — all $0
const PROVIDERS_ZERO_COST = [
  { name: 'Dr. Emily Park', specialty: 'Dermatologist', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.3 miles', address: '161 Madison Ave, New York, NY', rating: 4.6, reviewCount: 245, cost: '$0', costLabel: 'Est. out-of-pocket cost', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Today, May 7' },
  { name: 'Dr. James Rodriguez', specialty: 'Dermatologist', photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face', networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.8 miles', address: '30 E 40th St, New York, NY', rating: 4.2, reviewCount: 178, cost: '$0', costLabel: 'Est. out-of-pocket cost', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Tomorrow, May 8' },
  { name: 'Dr. Priya Sharma', specialty: 'Optometrist', providerType: 'female' as const, networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '0.5 miles', address: '457 Broome St, New York, NY', rating: 4.8, reviewCount: 412, cost: '$0', costLabel: 'Est. out-of-pocket cost', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Thu, May 9' },
  { name: 'Dr. Omar Hassan', specialty: 'Dermatologist', providerType: 'male' as const, networkTier: 'in-network' as const, networkLabel: 'In-Network', distance: '1.5 miles', address: '425 W 59th St, New York, NY', rating: 3.9, reviewCount: 89, cost: '$0', costLabel: 'Est. out-of-pocket cost', nextAppointmentLabel: 'Next appointment', nextAppointmentDate: 'Mon, May 12' },
]

// Service price only (Not covered / Deductible N/A / RBP / Indemnity) — no badges, shows "before insurance"
const servicePriceProvider = (name: string, photoUrl?: string, providerType?: string) => ({
  name,
  specialty: 'Dermatologist',
  ...(photoUrl ? { photoUrl } : {}),
  ...(providerType ? { providerType: providerType as any } : {}),
  networkTier: 'in-network' as const,
  networkLabel: 'In-Network',
  distance: '0.5 miles',
  address: '457 Broome St, New York, NY',
  rating: 4.2,
  reviewCount: 178,
  cost: '$1,800',
  costLabel: (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_LIGHT }}>Service price</span>
      <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_LIGHT }}>Before insurance</span>
    </span>
  ),
  nextAppointmentLabel: 'Next appointment',
  nextAppointmentDate: 'Today, May 7',
})

const PROVIDERS_SERVICE_PRICE = [
  servicePriceProvider('Dr. Emily Park', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'),
  servicePriceProvider('Dr. James Rodriguez', 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face'),
  servicePriceProvider('Dr. Priya Sharma', undefined, 'female'),
  servicePriceProvider('Dr. Omar Hassan', undefined, 'male'),
  servicePriceProvider('Dr. Benjamin Lee', 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face'),
]

const NOT_AVAILABLE_COST_LABEL = (
  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
    <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_LIGHT, textAlign: 'right', lineHeight: '18px' }}>
      Est. out-of-pocket cost<br/>is not available
    </span>
    <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT, textDecoration: 'underline', cursor: 'pointer' }}>
      Connect member ID
    </span>
  </span>
)

const notConnectedProvider = (name: string, photoUrl: string) => ({
  name,
  specialty: 'Dermatologist',
  photoUrl,
  networkTier: 'in-network' as const,
  networkLabel: 'In-Network',
  distance: '0.5 miles',
  address: '457 Broome St, New York, NY',
  rating: 4.2,
  reviewCount: 178,
  nextAppointmentLabel: 'Next appointment',
  nextAppointmentDate: 'Today, May 7',
})

const PROVIDERS_NOT_CONNECTED = [
  notConnectedProvider('Dr. Michael Torres', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face'),
  notConnectedProvider('Dr. Aisha Patel', 'https://images.unsplash.com/photo-1594824476967-48c8b964dc31?w=200&h=200&fit=crop&crop=face'),
  notConnectedProvider('Dr. David Kim', 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face'),
  notConnectedProvider('Dr. Rachel Goldstein', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face'),
]

const SCENARIOS: Record<ScenarioId, ScenarioConfig> = {
  'copay-flat': {
    id: 'copay-flat',
    label: 'Copay — $45 flat',
    description: 'Not subject to deductible, fixed copay per visit',
    costBox: {
      type: 'flat-cost',
      flatCost: '$45',
      flatAfterCost: 'per visit',
      flatLabel: 'Copay · Same for all in-network providers',
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Coverage/Flat(no deductible)', value: '$40 copay' },
      ],
      explanation: 'Your plan has a fixed copay for specialist visits. You pay $40 per visit regardless of which in-network provider you choose. The provider bills your insurance for the rest.',
      afterInsurance: '$45',
      afterInsuranceColor: 'blue',
      showGraph: false,
    },
    providers: PROVIDERS_COPAY_FLAT,
  },

  'copay-subject-deductible': {
    id: 'copay-subject-deductible',
    label: 'Copay — subject to deductible',
    description: 'Copay $40, user met deductible',
    costBox: {
      type: 'flat-cost',
      flatCost: '$40',
      flatAfterCost: "for this service since you've met your deductible",
      flatLabel: 'Same for all in-network providers',
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Coverage/Flat(no deductible)', value: '$40 copay' },
      ],
      explanation: 'Your plan has a fixed copay for specialist visits. You pay $40 per visit regardless of which in-network provider you choose. The provider bills your insurance for the rest.',
      afterInsurance: '$45',
      showGraph: false,
    },
    providers: PROVIDERS_COPAY_FLAT,
  },

  'coinsurance-range': {
    id: 'coinsurance-range',
    label: 'Coinsurance — range',
    description: 'Deductible met, cost range with graph',
    costBox: {
      type: 'range-graph',
      typicalRange: '$1,200–$1,800',
      typicalLow: '$1,200',
      typicalHigh: '$1,800',
      rangeLow: '$1,200',
      rangeHigh: '$3,700',
      subtitle: 'Out-of-pocket cost, after insurance',
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Coverage (After deductible)', value: '40% coinsurance' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 40% coinsurance, most people's out-of-pocket cost falls between $1,500–$1,900.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$1,500–$1,900',
      afterInsuranceColor: 'blue',
      costPercent: '40%',
      showGraph: true,
      graphRangeLow: '$200',
      graphRangeHigh: '$4,200',
    },
    providers: PROVIDERS_CONNECTED,
  },

  'copay-coinsurance': {
    id: 'copay-coinsurance',
    label: 'Copay + Coinsurance',
    description: '$40 copay + 40% coinsurance',
    costBox: {
      type: 'range-graph',
      typicalRange: '$1,200–$1,800',
      typicalLow: '$1,200',
      typicalHigh: '$1,800',
      rangeLow: '$1,200',
      rangeHigh: '$3,700',
      subtitle: 'Out-of-pocket cost, after insurance',
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Coverage (After deductible)', value: '$40 copay + 40% coinsurance' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 40% coinsurance, most people's out-of-pocket cost falls between $1,500–$1,900.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$1,500–$1,900',
      afterInsuranceColor: 'blue',
      costPercent: '40%',
      showGraph: true,
      graphRangeLow: '$200',
      graphRangeHigh: '$3,700',
    },
    providers: PROVIDERS_CONNECTED,
  },

  'meet-deductible': {
    id: 'meet-deductible',
    label: 'Will meet deductible',
    description: 'This benefit will meet your deductible',
    costBox: {
      type: 'range-graph',
      typicalRange: '$1,200–$1,800',
      typicalLow: '$1,200',
      typicalHigh: '$1,800',
      rangeLow: '$1,200',
      rangeHigh: '$3,700',
      subtitle: 'Out-of-pocket cost, after insurance',
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Coverage (Before deductible)', value: '100% coinsurance' },
        { label: 'Coverage (After deductible)', value: '$40 copay' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 40% coinsurance, most people's out-of-pocket cost falls between $1,500–$1,900.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$1,500–$1,900',
      afterInsuranceColor: 'blue',
      costPercent: '40%',
      showGraph: true,
      graphRangeLow: '$200',
      graphRangeHigh: '$3,700',
    },
    providers: PROVIDERS_CONNECTED,
  },

  'fully-covered-after-ded': {
    id: 'fully-covered-after-ded',
    label: 'Fully covered — after deductible',
    description: '$0 since deductible met',
    costBox: {
      type: 'zero-cost',
      zeroReason: "You'll pay $0 for this service since you've met your deductible",
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Cost share (After deductible)', value: '0% coinsurance' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 0% coinsurance, most people's out-of-pocket cost falls between $0–$0.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$0',
      afterInsuranceColor: 'green',
      showGraph: false,
    },
    providers: PROVIDERS_ZERO_COST,
  },

  'fully-covered-before-ded': {
    id: 'fully-covered-before-ded',
    label: 'Fully covered — before deductible',
    description: '$0 cost, no deductible applies',
    costBox: {
      type: 'zero-cost',
      zeroReason: "You'll pay $0 for this service",
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Cost share (Before deductible)', value: '0% coinsurance' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 0% coinsurance, most people's out-of-pocket cost falls between $0–$0.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$0',
      afterInsuranceColor: 'green',
      showGraph: false,
    },
    providers: PROVIDERS_ZERO_COST,
  },

  'fully-covered-oop-max': {
    id: 'fully-covered-oop-max',
    label: 'Fully covered — OOP max',
    description: '$0 since OOP max met',
    costBox: {
      type: 'zero-cost',
      zeroReason: "You'll pay $0 for this service since you've met your out-of-pocket max",
    },
    modal: {
      plan: 'Aetna PPO',
      network: 'In-network',
      deductible: 'Met ($2,000/$2,000)',
      deductibleMet: true,
      coverageRows: [
        { label: 'Plan', value: 'Aetna PPO' },
        { label: 'Network', value: 'In-network' },
        { label: 'Deductible status', value: 'Met ($2,000/$2,000)', hasCheck: true },
        { label: 'Cost share (After deductible)', value: '0% coinsurance' },
      ],
      explanation: "Most in-network providers in your area charge between $3,750–$4,750 for this service. After your plan's 0% coinsurance, most people's out-of-pocket cost falls between $0–$0.",
      beforeInsurance: '$3,750–$4,750',
      afterInsurance: '$0',
      afterInsuranceColor: 'green',
      showGraph: false,
    },
    providers: PROVIDERS_ZERO_COST,
  },

  'not-connected': {
    id: 'not-connected',
    label: 'Not Connected',
    description: 'No deductible info, connect CTA',
    costBox: {
      type: 'not-connected',
      connectSubtitle: "Your cost may vary depending on how much of your deductible you've already paid.",
    },
    modal: null,
    providers: PROVIDERS_NOT_CONNECTED,
  },

  'not-covered': {
    id: 'not-covered',
    label: 'Not covered — SBC/EOC',
    description: 'Service not covered, market price only',
    costBox: {
      type: 'market-price',
      priceRange: '$1,200–$1,800',
      explanationLine1: "Your cost share isn't specified under your plan.",
      explanationLink: "Contact our benefits team to check with your carrier.",
    },
    modal: null,
    providers: PROVIDERS_SERVICE_PRICE,
  },

  'deductible-na': {
    id: 'deductible-na',
    label: 'Deductible N/A',
    description: 'Service price experience, deductible not applicable',
    costBox: {
      type: 'market-price-ded-na',
      priceRange: '$1,200–$1,800',
      explanation: "What you'll pay with your insurance?\n\nBefore deductible:\nYou'll pay 40% of service price\n\nAfter deductible:\nYou will pay $0",
    },
    modal: null,
    providers: PROVIDERS_SERVICE_PRICE,
  },

  'rbp': {
    id: 'rbp',
    label: 'RBP',
    description: 'Reference-Based Pricing plan',
    costBox: {
      type: 'market-price-rbp',
      priceRange: '$1,200–$1,800',
      explanation: "RBP (Reference-Based Pricing) plan payment rates are based on a percentage of what Medicare would pay, typically ranging from 120% to 200% of Medicare rates.",
    },
    modal: null,
    providers: PROVIDERS_SERVICE_PRICE,
    networkDropdown: 'indemnity',
  },

  'indemnity': {
    id: 'indemnity',
    label: 'Indemnity',
    description: 'Indemnity insurance plan',
    costBox: {
      type: 'market-price-indemnity',
      priceRange: '$1,200–$1,800',
      explanation: "Indemnity plans reimburse a fixed amount per service. Rates based on UCR (Usual, Customary, and Reasonable) charges in your area.",
    },
    modal: null,
    providers: PROVIDERS_SERVICE_PRICE,
    networkDropdown: 'indemnity',
  },
}

// ── Floating Scenario Switcher ──────────────────────────────
function ScenarioSwitcher({ current, onChange }: { current: ScenarioId; onChange: (id: ScenarioId) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'fixed', bottom: SPACE_L, left: SPACE_L, zIndex: 9999 }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: 56, left: 0,
          background: BG_WHITE, borderRadius: RADIUS_XS,
          border: `1px solid ${BORDER_STRONG}`,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          padding: SPACE_S, minWidth: 260,
          maxHeight: 'calc(100vh - 120px)', overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: SPACE_XXS,
        }}>
          <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_LIGHT, margin: 0, marginBottom: SPACE_XXS }}>
            Switch Scenario
          </p>
          {(Object.keys(SCENARIOS) as ScenarioId[]).map((id) => {
            const s = SCENARIOS[id]
            const isActive = id === current
            return (
              <button
                key={id}
                onClick={() => { onChange(id); setOpen(false) }}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 2,
                  padding: `${SPACE_XS}px ${SPACE_S}px`,
                  background: isActive ? sc.primary.surface.subtle : 'transparent',
                  border: isActive ? `1.5px solid ${PRIMARY_BG}` : `1px solid transparent`,
                  borderRadius: RADIUS_XXS, cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>
                  {s.label}
                </span>
                <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[12], color: TEXT_LIGHT }}>
                  {s.description}
                </span>
              </button>
            )
          })}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 48, height: 48, borderRadius: RADIUS_FULL,
          background: TEXT_DEFAULT, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v14M3 10h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}


// ── Filter Popover ──────────────────────────────────────────
function FilterPopover({
  label,
  active,
  children,
  open,
  onToggle,
}: {
  label: string
  active: boolean
  children: React.ReactNode
  open: boolean
  onToggle: () => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  // Close on click outside
  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onToggle()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onToggle])

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      <div style={active ? { borderRadius: RADIUS_FULL, outline: `2px solid ${TEXT_DEFAULT}` } : undefined}>
        <Button
          variant="outline"
          size="xs"
          pill
          iconRight={<ChevronDownLine size="sm" />}
          onClick={onToggle}
        >
          {label}
        </Button>
      </div>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, marginTop: SPACE_XXS,
          background: BG_WHITE, borderRadius: RADIUS_XS,
          border: `1px solid ${BORDER_STRONG}`,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          padding: SPACE_S, minWidth: 200, zIndex: 100,
        }}>
          {children}
        </div>
      )}
    </div>
  )
}

// ── Filter Section Title ──────────────────────────────────────
function FilterTitle({ title }: { title: string }) {
  return (
    <p style={{
      fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[20],
      lineHeight: '24px', color: TEXT_DEFAULT, margin: 0,
    }}>
      {title}
    </p>
  )
}

// ── Map Placeholder ───────────────────────────────────────────
const MAP_IMG = 'https://mt1.google.com/vt/lyrs=m&x=4825&y=6156&z=14'

function MapPlaceholder() {
  return (
    <div style={{
      width: '100%', height: 160, borderRadius: RADIUS_XS,
      position: 'relative', overflow: 'hidden',
    }}>
      <img
        src={MAP_IMG}
        alt="Map of New York area"
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          display: 'block',
        }}
      />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Button variant="outline" size="sm" iconLeft={<ExpandLine size="md" />}
          style={{ background: BG_WHITE, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
          Map view
        </Button>
      </div>
    </div>
  )
}

// ── Skeleton Cost Box ────────────────────────────────────────
function CostBoxSkeleton({ plain }: { plain?: boolean } = {}) {
  return (
    <div style={{
      background: BG_WHITE,
      ...(plain ? {} : {
        border: `1px solid ${BORDER_STRONG}`,
        borderRadius: RADIUS_XXS,
        boxShadow: SHADOW_CARD,
        padding: `${SPACE_M}px ${SPACE_S}px`,
      }),
      display: 'flex', flexDirection: 'column', gap: SPACE_M,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
        <div style={{ height: 29, width: '90%', background: BG_SUBTLE, borderRadius: 6, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: 29, width: '60%', background: BG_SUBTLE, borderRadius: 6, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: 17, width: '70%', background: BG_SUBTLE, borderRadius: 4, marginTop: 4, animation: 'pulse 1.5s ease-in-out infinite' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XS }}>
        <div style={{ height: 28, width: '100%', background: BG_SUBTLE, borderRadius: 100, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ height: 16, width: 50, background: BG_SUBTLE, borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: 16, width: 50, background: BG_SUBTLE, borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite' }} />
        </div>
      </div>
      <div style={{ height: 19, width: '55%', background: BG_SUBTLE, borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite' }} />
    </div>
  )
}

// ── Cost Box (above map) ─────────────────────────────────────
function CostBox({ scenario, onLearnMore, onConnect, headerSlot, expanded }: { scenario: ScenarioConfig; onLearnMore?: () => void; onConnect?: () => void; headerSlot?: React.ReactNode; expanded?: boolean }) {
  const cb = scenario.costBox

  const cardStyle: React.CSSProperties = {
    background: BG_WHITE,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACE_M,
  }

  const linkStyle: React.CSSProperties = {
    background: 'none', border: 'none', padding: 0, cursor: 'pointer',
    fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], lineHeight: '19px',
    color: TEXT_DEFAULT, textDecoration: 'underline', textAlign: 'left',
  }

  // ── Not connected ──
  if (cb.type === 'not-connected') {
    return (
      <div style={cardStyle}>
        {headerSlot}
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
          <p style={{
            fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
            fontSize: fontSizes[24], lineHeight: '29px', color: TEXT_DEFAULT, margin: 0,
          }}>
            Connect your member id to see exact prices
          </p>
          <p style={{
            fontFamily: FONT, fontWeight: W_REGULAR,
            fontSize: fontSizes[14], lineHeight: '17px', color: TEXT_DEFAULT, margin: 0,
          }}>
            {cb.connectSubtitle}
          </p>
        </div>

        {/* Coverage info card */}
        <div style={{
          background: sc.neutral.surface.extraSubtle,
          borderRadius: RADIUS_XS,
          padding: `${SPACE_XXS}px 0`,
          display: 'flex', flexDirection: 'column', gap: SPACE_XXS,
        }}>
          <div style={{ padding: `4px ${SPACE_XXS}px`, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DEFAULT, margin: 0 }}>
              Coverage (Before deductible)
            </p>
            <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DEFAULT, margin: 0 }}>
              You'll pay 40% of service price
            </p>
          </div>
          <div style={{ height: 1, background: BORDER_LIGHT }} />
          <div style={{ padding: `4px ${SPACE_XXS}px`, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DEFAULT, margin: 0 }}>
              Coverage (After deductible)
            </p>
            <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DEFAULT, margin: 0 }}>
              You will pay $0
            </p>
          </div>
        </div>

        <Button variant="primary" size="sm" fullWidth onClick={onConnect}>
          Connect member ID
        </Button>
      </div>
    )
  }

  // ── Flat cost (copay) ──
  if (cb.type === 'flat-cost') {
    return (
      <div style={cardStyle}>
        {headerSlot}
        <div>
          <p style={{ fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM, fontSize: fontSizes[24], lineHeight: '29px', color: TEXT_DEFAULT, margin: 0 }}>
            You'll pay <span style={{ color: BLUE_500 }}>{cb.flatCost}</span> {cb.flatAfterCost || 'per visit'}
          </p>
          <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT, margin: '4px 0 0' }}>
            {cb.flatLabel}
          </p>
        </div>
        <button onClick={onLearnMore} style={linkStyle}>How we calculated your cost?</button>
      </div>
    )
  }

  // ── Zero cost (fully covered) ──
  if (cb.type === 'zero-cost') {
    // Split zeroReason around "$0" to render it in blue
    const reason = cb.zeroReason || ''
    const dollarIdx = reason.indexOf('$0')
    const before = dollarIdx >= 0 ? reason.slice(0, dollarIdx) : reason
    const after = dollarIdx >= 0 ? reason.slice(dollarIdx + 2) : ''

    return (
      <div style={cardStyle}>
        {headerSlot}
        <p style={{ fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM, fontSize: fontSizes[24], lineHeight: '29px', color: TEXT_DEFAULT, margin: 0 }}>
          {before}
          {dollarIdx >= 0 && <span style={{ color: BLUE_500 }}>$0</span>}
          {after}
        </p>
        <button onClick={onLearnMore} style={linkStyle}>How we calculated your cost?</button>
      </div>
    )
  }

  // ── Market price (not covered) ──
  if (cb.type === 'market-price' || cb.type === 'market-price-ded-na' || cb.type === 'market-price-rbp' || cb.type === 'market-price-indemnity') {
    const showInsuranceSection = cb.type !== 'market-price'
    return (
      <div style={cardStyle}>
        {headerSlot}
        <div>
          <p style={{ fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM, fontSize: fontSizes[24], lineHeight: '29px', color: TEXT_DEFAULT, margin: 0 }}>
            The market price for this is service typically costs between{' '}
            <span style={{ color: PRIMARY_BG }}>{cb.priceRange}</span>
          </p>
          <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK, margin: '4px 0 0' }}>
            Price before your insurance kicks in
          </p>
        </div>

        {showInsuranceSection && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT, margin: 0 }}>
              What you'll pay with your insurance?
            </p>
            <div style={{
              background: sc.neutral.surface.extraSubtle,
              borderRadius: RADIUS_XXS,
              padding: `${SPACE_XS}px ${SPACE_S}px`,
              display: 'flex', flexDirection: 'column', gap: SPACE_XXS,
              fontFamily: FONT, fontSize: fontSizes[14], color: TEXT_DARK,
            }}>
              {cb.type === 'market-price-ded-na' && (
                <>
                  <div>
                    <p style={{ fontWeight: W_MEDIUM, margin: 0, color: TEXT_DEFAULT }}>Before deductible</p>
                    <p style={{ fontWeight: W_REGULAR, margin: '2px 0 0' }}>You'll pay 40% of service price</p>
                  </div>
                  <div style={{ height: 1, background: BORDER_LIGHT }} />
                  <div>
                    <p style={{ fontWeight: W_MEDIUM, margin: 0, color: TEXT_DEFAULT }}>After deductible</p>
                    <p style={{ fontWeight: W_REGULAR, margin: '2px 0 0' }}>You will pay $0</p>
                  </div>
                </>
              )}
              {cb.type === 'market-price-rbp' && (
                <p style={{ fontWeight: W_REGULAR, margin: 0, lineHeight: '20px' }}>
                  {cb.explanation}
                </p>
              )}
              {cb.type === 'market-price-indemnity' && (
                <p style={{ fontWeight: W_REGULAR, margin: 0, lineHeight: '20px' }}>
                  {cb.explanation}
                </p>
              )}
            </div>
          </div>
        )}

        {cb.type === 'market-price' && (
          <div style={{
            borderTop: `1px solid ${BORDER_LIGHT}`,
            paddingTop: SPACE_S,
            display: 'flex', flexDirection: 'column', gap: 4,
            fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK, lineHeight: '20px',
          }}>
            <span>{cb.explanationLine1}</span>
            <button onClick={() => {}} style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14],
              color: TEXT_DEFAULT, textDecoration: 'underline', textAlign: 'left',
            }}>
              {cb.explanationLink}
            </button>
          </div>
        )}
      </div>
    )
  }

  // ── Range graph (coinsurance / copay+coinsurance / meet deductible) ──
  return (
    <div style={cardStyle}>
      {headerSlot}
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
        <p style={{
          fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
          fontSize: fontSizes[24], lineHeight: '29px', color: TEXT_DEFAULT, margin: 0,
        }}>
          This service typically costs between{' '}
          <span style={{ color: BLUE_500 }}>{cb.typicalRange}</span>
        </p>
        <p style={{
          fontFamily: FONT, fontWeight: W_REGULAR,
          fontSize: fontSizes[20], lineHeight: '24px', color: TEXT_DARK, margin: 0,
        }}>
          {cb.subtitle}
        </p>
      </div>

      {/* Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XS }}>
        <div style={{ display: 'flex', gap: 2, height: 28, alignItems: 'center', width: '100%' }}>
          <div style={{ width: 45, height: '100%', background: GREEN_200, borderRadius: `100px ${RADIUS_XXXS}px ${RADIUS_XXXS}px 100px`, flexShrink: 0 }} />
          <div style={{ width: 110, height: '100%', background: BLUE_500, borderRadius: RADIUS_XXXS, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
            <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], lineHeight: '19px', color: BLUE_100, whiteSpace: 'nowrap' }}>
              Typical cost
            </span>
          </div>
          <div style={{ flex: 1, height: '100%', background: RED_100, borderRadius: `${RADIUS_XXXS}px 100px 100px ${RADIUS_XXXS}px` }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DARK }}>{cb.rangeLow}</span>
          <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DARK }}>{cb.rangeHigh}</span>
        </div>
      </div>

      {expanded ? (
        <>
          {/* ── Section: Plan & Coverage ── */}
          <div style={{ borderTop: `1px solid ${BORDER_LIGHT}`, paddingTop: SPACE_M, display: 'flex', flexDirection: 'column', gap: SPACE_XS }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT, margin: 0 }}>
              Your plan & coverage
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              {[
                { label: 'Plan', value: 'Aetna PPO' },
                { label: 'Network', value: 'In-network' },
              ].map((row) => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${SPACE_XXS}px 0` }}>
                  <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK }}>{row.label}</span>
                  <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>{row.value}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${SPACE_XXS}px 0` }}>
                <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK }}>Deductible status</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>
                  <CheckCrFrLine size="sm" color={SUCCESS_TEXT} />
                  Met ($2,000/$2,000)
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${SPACE_XXS}px 0` }}>
                <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK }}>Coverage</span>
                <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>40% coinsurance</span>
              </div>
            </div>
          </div>

          {/* ── Section: Before insurance ── */}
          <div style={{ borderTop: `1px solid ${BORDER_LIGHT}`, paddingTop: SPACE_M, display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DARK, margin: 0 }}>Before insurance</p>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM, fontSize: fontSizes[20], lineHeight: '24px', color: TEXT_DEFAULT, margin: 0 }}>
              $3,750–$4,750
            </p>
            <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK, margin: 0 }}>
              Providers typically charge
            </p>
          </div>

          {/* ── Section: After insurance ── */}
          <div style={{ borderTop: `1px solid ${BORDER_LIGHT}`, paddingTop: SPACE_M, display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
            <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DARK, margin: 0 }}>After insurance</p>
            <p style={{ fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM, fontSize: fontSizes[20], lineHeight: '24px', color: BLUE_500, margin: 0 }}>
              $1,500–$1,900
            </p>
            <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK, margin: 0 }}>
              Your out-of-pocket cost (40%)
            </p>
          </div>

          {/* ── Section: Disclaimer ── */}
          <div style={{ borderTop: `1px solid ${BORDER_LIGHT}`, paddingTop: SPACE_S }}>
            <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[12], lineHeight: '16px', color: TEXT_LIGHT, margin: 0 }}>
              This is an estimate based on typical provider charges and your plan's cost-sharing. Your actual cost may vary depending on the provider you choose.
            </p>
          </div>
        </>
      ) : (
        <button onClick={onLearnMore} style={linkStyle}>
          How we calculated your cost?
        </button>
      )}
    </div>
  )
}

// ── Select Options ────────────────────────────────────────────
const planOptions = [
  { value: 'anthem', label: 'Anthem' },
  { value: 'aetna', label: 'Aetna' },
  { value: 'cigna', label: 'Cigna' },
  { value: 'unitedhealthcare', label: 'UnitedHealthcare' },
]

const networkOptions = [
  { value: 'in-network', label: 'In-network', iconLeft: <NetworkTierCoin backColor="#C2E5C3" frontColor="#5BB95E" size="sm" /> },
  { value: 'tier-2', label: 'Tier 2', iconLeft: <NetworkTierCoin backColor="#FFE78F" frontColor="#F5C000" size="sm" /> },
  { value: 'tier-3', label: 'Tier 3', iconLeft: <NetworkTierCoin backColor="#CEB5F7" frontColor="#8242EB" size="sm" /> },
  { value: 'out-of-network', label: 'Out-of-network', iconLeft: <NetworkTierCoin backColor="#FAB3B3" frontColor="#F23C3C" size="sm" /> },
]

const distanceOptions = [
  { value: '5', label: '5 miles' },
  { value: '10', label: '10 miles' },
  { value: '25', label: '25 miles' },
  { value: '50', label: '50 miles' },
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'cantonese', label: 'Cantonese' },
  { value: 'korean', label: 'Korean' },
  { value: 'russian', label: 'Russian' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'french', label: 'French' },
  { value: 'portuguese', label: 'Portuguese' },
]


// ── Provider data now lives in PROVIDERS_CONNECTED / PROVIDERS_NOT_CONNECTED above ──

// ══════════════════════════════════════════════════════════════
// ProviderSearchResults — Full-screen interactive page
// ══════════════════════════════════════════════════════════════
// ── Map coordinates for NYC providers ──
const PROVIDER_COORDS: Record<string, [number, number]> = {
  '161 Madison Ave, New York, NY': [40.7465, -73.9838],
  '457 Broome St, New York, NY': [40.7225, -73.9990],
  '30 E 40th St, New York, NY': [40.7498, -73.9810],
  '635 Madison Ave, New York, NY': [40.7635, -73.9712],
  '110 E 59th St, New York, NY': [40.7625, -73.9680],
  '51 W 51st St, New York, NY': [40.7612, -73.9780],
  '1250 Broadway, New York, NY': [40.7478, -73.9882],
  '425 W 59th St, New York, NY': [40.7710, -73.9890],
  '100 E 77th St, Lower Level, New York, NY 10075': [40.7740, -73.9570],
  '110 E 59th St, Suite 10B, New York, NY 10022': [40.7625, -73.9680],
}

function createPriceIcon(price: string, costLevel?: string) {
  return L.divIcon({
    className: '',
    html: `<div style="
      background: white;
      color: #222;
      padding: 8px 14px;
      border-radius: 28px;
      display: inline-block;
      width: auto;
      font-family: 'Founders Grotesk', Inter, -apple-system, sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.01em;
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04);
      cursor: pointer;
      transform: translate(-50%, -100%);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      position: relative;
      line-height: 1;
    " onmouseover="this.style.transform='translate(-50%, -100%) scale(1.08)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08)'; this.style.zIndex='999';"
       onmouseout="this.style.transform='translate(-50%, -100%) scale(1)'; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04)'; this.style.zIndex='auto';"
    >${price}</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  })
}

function MapZoomControls() {
  const map = useMap()
  return (
    <div style={{
      position: 'absolute', top: 12, right: 12, zIndex: 1000,
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      <button onClick={() => map.zoomIn()} style={{
        width: 36, height: 36, background: BG_WHITE, border: `1px solid ${BORDER_STRONG}`,
        borderRadius: 8, cursor: 'pointer', fontSize: 20, fontWeight: 600,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>+</button>
      <button onClick={() => map.zoomOut()} style={{
        width: 36, height: 36, background: BG_WHITE, border: `1px solid ${BORDER_STRONG}`,
        borderRadius: 8, cursor: 'pointer', fontSize: 20, fontWeight: 600,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>−</button>
    </div>
  )
}

export function Experiment10() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>('coinsurance-range')
  const scenario = SCENARIOS[scenarioId]
  const providers = scenario.providers

  const [showConnectModal, setShowConnectModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = () => {
    setShowConnectModal(false)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  const [activeTab, setActiveTab] = useState('find-care')
  const [searchQuery, setSearchQuery] = useState('Retinal imaging')
  const [plan, setPlan] = useState('anthem')
  const [network, setNetwork] = useState('in-network')
  const [activeSegment, setActiveSegment] = useState<'service' | 'plan' | 'network' | 'location' | null>(null)
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeSegment) return
    const handleClick = (e: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
        setActiveSegment(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [activeSegment])
  const [distance, setDistance] = useState('5')
  const [rating, setRating] = useState('5')
  const [gender, setGender] = useState<string | null>(null)
  const [languages, setLanguages] = useState<string[]>([])
  const [onlineBooking, setOnlineBooking] = useState(false)
  const [genderSelection, setGenderSelection] = useState<{ male: boolean; female: boolean }>({ male: false, female: false })
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  const [searchCleared, setSearchCleared] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const toggleFilter = (name: string) => setOpenFilter(openFilter === name ? null : name)
  const [showCostModal, setShowCostModal] = useState(false)
  const [costVariant, setCostVariant] = useState<'compact' | 'expanded'>('compact')
  const [showVariantPicker, setShowVariantPicker] = useState(false)
  const [bookingProvider, setBookingProvider] = useState<typeof PROVIDERS_CONNECTED[0] | null>(null)
  const [bookingLocation, setBookingLocation] = useState('loc1')
  const [visitReason, setVisitReason] = useState('primary')
  const [seenBefore, setSeenBefore] = useState<'yes' | 'no' | null>('no')

  // ── Responsive: hide sidebar below 1024px ──
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const showSidebar = winWidth >= SIDEBAR_BP

  return (
    <div style={{ minHeight: '100vh', background: BG_WHITE }}>

      {/* ── NavBar ── */}
      <AppNavBar activeTab={activeTab} onTabChange={setActiveTab} sticky />

      {/* ── Unified Search Bar (Airbnb-style segments) ── */}
      <div style={{
        borderBottom: `1px solid ${BORDER_LIGHT}`,
        background: BG_WHITE,
        padding: showSidebar ? 0 : `${SPACE_XS}px 0`,
        position: 'relative', zIndex: 48,
      }}>
        {showSidebar ? (
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            padding: `${SPACE_S}px ${SPACE_XL}px`,
          }}>
          <div
            ref={searchBarRef}
            onMouseEnter={(e) => { if (!activeSegment) e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.14)'; e.currentTarget.style.transform = 'scale(1.01)' }}
            onMouseLeave={(e) => { if (!activeSegment) e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)' }}
            style={{
            display: 'flex', alignItems: 'center', gap: 0,
            border: `1px solid ${BORDER_STRONG}`,
            borderRadius: RADIUS_FULL,
            overflow: 'visible',
            boxShadow: 'none',
            transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
            position: 'relative',
            background: activeSegment ? BG_SUBTLE : BG_WHITE,
            padding: 4,
          }}>
            {/* Service segment */}
            <div
              onClick={() => setActiveSegment(activeSegment === 'service' ? null : 'service')}
              onMouseEnter={() => setHoveredSegment('service')}
              onMouseLeave={() => setHoveredSegment(null)}
              style={{
                flex: 1.5, padding: `${SPACE_XXS}px ${SPACE_M}px`,
                cursor: 'pointer', position: 'relative',
                background: activeSegment === 'service' ? BG_WHITE : hoveredSegment === 'service' && !activeSegment ? '#f7f7f7' : 'transparent',
                borderRadius: RADIUS_FULL,
                transition: 'background 0.15s, box-shadow 0.15s',
                boxShadow: activeSegment === 'service' && hoveredSegment === 'service' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[12], color: TEXT_DEFAULT, lineHeight: '14px', marginBottom: 2 }}>
                Search
              </div>
              <div style={{ paddingRight: searchQuery ? 24 : 0 }}>
                {activeSegment === 'service' ? (
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); if (e.target.value) setSearchCleared(false) }}
                    onBlur={() => setTimeout(() => setActiveSegment(null), 200)}
                    style={{
                      border: 'none', outline: 'none', background: 'transparent', width: '100%',
                      fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT,
                    }}
                    placeholder="Provider, specialty, procedure..."
                  />
                ) : (
                  <div style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: searchQuery ? TEXT_DEFAULT : TEXT_LIGHT, lineHeight: '18px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {searchQuery || 'Provider, specialty, procedure...'}
                  </div>
                )}
              </div>
              {searchQuery && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSearchQuery(''); setSearchCleared(true); setActiveSegment('service') }}
                  style={{
                    position: 'absolute', right: SPACE_M, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <CloseLine size="sm" color={TEXT_LIGHT} />
                </button>
              )}
              {activeSegment === 'service' && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 8,
                  background: BG_WHITE, borderRadius: RADIUS_XS, border: `1px solid ${BORDER_STRONG}`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: SPACE_M, minWidth: 540, zIndex: 9000,
                }}>
                  {/* Frequently searched specialties */}
                  <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT, margin: `0 0 ${SPACE_M}px` }}>
                    Frequently searched specialties
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: SPACE_XXS, marginBottom: SPACE_L }}>
                    {[
                      { label: 'Telehealth 24/7', Icon: TelehealthIcon },
                      { label: 'Dentist', Icon: DentistIcon },
                      { label: 'Psychologist', Icon: SpecialistIcon },
                      { label: 'OB-GYN', Icon: ObGynIcon },
                      { label: 'Oncologist', Icon: OncologistIcon },
                      { label: 'Primary care', Icon: PrimaryCareIcon },
                      { label: 'Dermatology', Icon: DermatologyIcon },
                      { label: 'Urgent Care', Icon: UrgentCareIcon },
                    ].map(({ label, Icon }) => (
                      <div
                        key={label}
                        onMouseDown={() => {
                          setSearchQuery(label)
                          setActiveSegment(null)
                          setIsLoading(true)
                          setTimeout(() => {
                            setIsLoading(false)
                            setScenarioId('copay-flat')
                          }, 2000)
                        }}
                        style={{
                          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                          background: BG_WHITE, border: `1px solid ${BORDER_STRONG}`,
                          borderRadius: RADIUS_XXS, padding: SPACE_S, cursor: 'pointer', height: 85,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = BG_SUBTLE)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = BG_WHITE)}
                      >
                        <Icon size="md" />
                        <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Frequently searched procedures */}
                  <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT, margin: `0 0 ${SPACE_M}px` }}>
                    Frequently searched procedures
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: SPACE_XXS }}>
                    {['MRI', 'X-ray', 'Blood test', 'Flu vaccine', 'Mammography', 'Ultrasound', 'Postpartum care', 'Allergy testing'].map(proc => (
                      <button
                        key={proc}
                        onMouseDown={() => {
                          setSearchQuery(proc)
                          setActiveSegment(null)
                          setIsLoading(true)
                          setTimeout(() => { setIsLoading(false); setScenarioId('coinsurance-range') }, 2000)
                        }}
                        style={{
                          fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT,
                          background: BG_WHITE, border: `1px solid ${BORDER_STRONG}`,
                          borderRadius: RADIUS_XXS, padding: `${SPACE_XXS}px ${SPACE_XS}px`,
                          cursor: 'pointer', whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = BG_SUBTLE)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = BG_WHITE)}
                      >
                        {proc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider: Service | Plan */}
            <div style={{ width: 1, height: 24, background: (activeSegment || hoveredSegment === 'service' || hoveredSegment === 'plan') ? 'transparent' : BORDER_LIGHT, flexShrink: 0, transition: 'background 0.15s' }} />

            {/* Plan segment */}
            <div
              onClick={() => setActiveSegment(activeSegment === 'plan' ? null : 'plan')}
              onMouseEnter={() => setHoveredSegment('plan')}
              onMouseLeave={() => setHoveredSegment(null)}
              style={{
                flex: 1, padding: `${SPACE_XXS}px ${SPACE_M}px`,
                cursor: 'pointer', position: 'relative',
                background: activeSegment === 'plan' ? BG_WHITE : hoveredSegment === 'plan' && !activeSegment ? '#f7f7f7' : 'transparent',
                borderRadius: RADIUS_FULL,
                transition: 'background 0.15s, box-shadow 0.15s',
                boxShadow: activeSegment === 'plan' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[12], color: TEXT_DEFAULT, lineHeight: '14px', marginBottom: 2 }}>
                Plan
              </div>
              <div style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT, lineHeight: '18px' }}>
                {planOptions.find(o => o.value === plan)?.label || 'Select plan'}
              </div>
              {activeSegment === 'plan' && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 8,
                  background: BG_WHITE, borderRadius: RADIUS_XS, border: `1px solid ${BORDER_STRONG}`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: SPACE_XS, minWidth: 220, zIndex: 9000,
                }}>
                  {planOptions.map(opt => (
                    <div key={opt.value} onClick={() => { setPlan(opt.value); setActiveSegment(null) }} style={{
                      padding: `${SPACE_XXS}px ${SPACE_XXS}px`, cursor: 'pointer', borderRadius: 6,
                      fontFamily: FONT, fontSize: fontSizes[14], color: TEXT_DEFAULT,
                      display: 'flex', alignItems: 'center', gap: SPACE_XXS,
                      background: plan === opt.value ? sc.primary.surface.subtle : 'transparent',
                    }}>
                      {opt.iconLeft}
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider: Plan | Network */}
            <div style={{ width: 1, height: 24, background: (activeSegment || hoveredSegment === 'plan' || hoveredSegment === 'network') ? 'transparent' : BORDER_LIGHT, flexShrink: 0, transition: 'background 0.15s' }} />

            {/* Network segment */}
            <div
              onClick={() => setActiveSegment(activeSegment === 'network' ? null : 'network')}
              onMouseEnter={() => setHoveredSegment('network')}
              onMouseLeave={() => setHoveredSegment(null)}
              style={{
                flex: 1, padding: `${SPACE_XXS}px ${SPACE_M}px`,
                cursor: 'pointer', position: 'relative',
                background: activeSegment === 'network' ? BG_WHITE : hoveredSegment === 'network' && !activeSegment ? '#f7f7f7' : 'transparent',
                borderRadius: RADIUS_FULL,
                transition: 'background 0.15s, box-shadow 0.15s',
                boxShadow: activeSegment === 'network' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[12], color: TEXT_DEFAULT, lineHeight: '14px', marginBottom: 2 }}>
                Network
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT, lineHeight: '18px' }}>
                {networkOptions.find(o => o.value === network)?.iconLeft}
                {networkOptions.find(o => o.value === network)?.label || 'Select'}
              </div>
              {activeSegment === 'network' && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 8,
                  background: BG_WHITE, borderRadius: RADIUS_XS, border: `1px solid ${BORDER_STRONG}`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: SPACE_XS, minWidth: 220, zIndex: 9000,
                }}>
                  {networkOptions.map(opt => (
                    <div key={opt.value} onClick={() => { setNetwork(opt.value); setActiveSegment(null) }} style={{
                      padding: `${SPACE_XXS}px ${SPACE_XXS}px`, cursor: 'pointer', borderRadius: 6,
                      fontFamily: FONT, fontSize: fontSizes[14], color: TEXT_DEFAULT,
                      display: 'flex', alignItems: 'center', gap: SPACE_XXS,
                      background: network === opt.value ? sc.primary.surface.subtle : 'transparent',
                    }}>
                      {opt.iconLeft}
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider: Network | Location */}
            <div style={{ width: 1, height: 24, background: (activeSegment || hoveredSegment === 'network' || hoveredSegment === 'location') ? 'transparent' : BORDER_LIGHT, flexShrink: 0, transition: 'background 0.15s' }} />

            {/* Location segment */}
            <div
              onClick={() => setActiveSegment(activeSegment === 'location' ? null : 'location')}
              onMouseEnter={() => setHoveredSegment('location')}
              onMouseLeave={() => setHoveredSegment(null)}
              style={{
                flex: 1, padding: `${SPACE_XXS}px ${SPACE_M}px`,
                cursor: 'pointer', position: 'relative',
                background: activeSegment === 'location' ? BG_WHITE : hoveredSegment === 'location' && !activeSegment ? '#f7f7f7' : 'transparent',
                borderRadius: RADIUS_FULL,
                transition: 'background 0.15s, box-shadow 0.15s',
                boxShadow: activeSegment === 'location' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <div style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[12], color: TEXT_DEFAULT, lineHeight: '14px', marginBottom: 2 }}>
                Location
              </div>
              <div style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT, lineHeight: '18px' }}>
                New York (Home)
              </div>
              {activeSegment === 'location' && (
                <div style={{
                  position: 'absolute', top: '100%', right: 0, marginTop: 8,
                  background: BG_WHITE, borderRadius: RADIUS_XS, border: `1px solid ${BORDER_STRONG}`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: SPACE_XS, minWidth: 240, zIndex: 9000,
                }}>
                  <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[12], color: TEXT_LIGHT, margin: `0 0 ${SPACE_XXS}px`, padding: `0 ${SPACE_XXS}px` }}>Saved locations</p>
                  {[
                    { icon: <HomeLine size="sm" color={TEXT_DEFAULT} />, label: 'Home', sub: 'New York, NY 10014' },
                    { icon: <HospitalBuildingLine size="sm" color={TEXT_DEFAULT} />, label: 'Work', sub: 'New York, NY 10001' },
                    { icon: <LocationLine size="sm" color={TEXT_DEFAULT} />, label: 'Current location', sub: 'Detect automatically' },
                  ].map(loc => (
                    <div key={loc.label} onClick={() => setActiveSegment(null)} style={{
                      padding: `${SPACE_XXS}px ${SPACE_XXS}px`, cursor: 'pointer', borderRadius: 6,
                      display: 'flex', alignItems: 'center', gap: SPACE_XXS,
                    }}>
                      {loc.icon}
                      <div>
                        <div style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>{loc.label}</div>
                        <div style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[12], color: TEXT_LIGHT }}>{loc.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search button */}
            <div style={{ padding: `0 0 0 0` }}>
              <Button variant="primary" size="sm" iconOnly aria-label="Search"
                onClick={() => setActiveSegment(null)}
                style={{ borderRadius: RADIUS_FULL, width: 48, height: 48 }}>
                <SearchLine size="md" color={BG_WHITE} />
              </Button>
            </div>
          </div>
          </div>
        ) : (
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'flex', alignItems: 'center', gap: SPACE_S,
            border: `1px solid ${BORDER_STRONG}`,
            borderRadius: RADIUS_FULL,
            padding: `${SPACE_XS}px ${SPACE_M}px ${SPACE_XS}px ${SPACE_XS}px`,
            margin: `0 ${SPACE_S}px`,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: RADIUS_FULL,
              background: PRIMARY_BG, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <SearchLine size="md" color={BG_WHITE} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16],
                color: TEXT_DEFAULT, lineHeight: '20px',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {searchQuery || 'Search'}
              </div>
              <div style={{
                fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14],
                color: TEXT_LIGHT, lineHeight: '18px',
              }}>
                Anthem · In-network · New York
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Dark overlay when a segment is active ── */}
      {activeSegment && (
        <div
          onClick={() => setActiveSegment(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 45,
            background: 'rgba(0,0,0,0.2)',
            pointerEvents: 'all',
          }}
        />
      )}

      {/* ── Main Content ── */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', flexDirection: 'row', gap: 104,
        padding: showSidebar ? `${SPACE_XXL}px ${SPACE_XL}px` : `${SPACE_S}px`,
      }}>

        {/* ── Left: Cost & Plan Sidebar ── */}
        {showSidebar && <div style={{ width: SIDEBAR_W, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: SPACE_S }}>

          {/* Plan & Network moved to unified search bar */}

          {/* Cost Box */}
          {isLoading ? <CostBoxSkeleton plain /> : (
            <CostBox
              scenario={scenario}
              onLearnMore={() => setShowCostModal(true)}
              onConnect={() => setShowConnectModal(true)}
              headerSlot={undefined}
              expanded={costVariant === 'expanded'}
            />
          )}

          <div style={{ height: SPACE_XS }} />

          {/* ── Map Preview (static) ── */}
          <div style={{
            borderRadius: RADIUS_XS, overflow: 'hidden',
            border: `1px solid ${BORDER_STRONG}`, height: 180,
            position: 'relative',
          }}>
            <img
              src="https://mt1.google.com/vt/lyrs=m&x=2412&y=3078&z=13"
              alt="Map preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }}>
              <Button variant="outline" size="sm" iconLeft={<ExpandLine size="sm" />}
                style={{ background: BG_WHITE, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                Map view
              </Button>
            </div>
          </div>

          <div style={{ height: SPACE_S }} />

          {/* ── Filters ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXXL }}>

            {/* Distance */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Distance" />
              <Select
                options={distanceOptions}
                value={distance}
                onChange={(v) => setDistance(v as string)}
                placeholder="Select distance"
                size="sm"
              />
            </div>

            {/* Provider Rating */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Provider rating" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} style={{
                    display: 'flex', alignItems: 'center', gap: SPACE_XXS,
                    padding: `${SPACE_XXS}px 0`,
                  }}>
                    <RadioButton
                      name="rating-exp10"
                      checked={rating === String(stars)}
                      onChange={() => setRating(String(stars))}
                      label=""
                    />
                    <StarRating rating={stars} />
                    <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DEFAULT }}>
                      and up
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Gender */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Provider gender" />
              <div style={{ display: 'flex', gap: SPACE_XS }}>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setGender(gender === 'male' ? null : 'male')}
                  style={gender === 'male' ? { borderColor: TEXT_DEFAULT, background: BG_SUBTLE } : {}}
                >
                  Male
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setGender(gender === 'female' ? null : 'female')}
                  style={gender === 'female' ? { borderColor: TEXT_DEFAULT, background: BG_SUBTLE } : {}}
                >
                  Female
                </Button>
              </div>
            </div>

            {/* Languages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Languages" />
              <Select
                options={languageOptions}
                value={languages}
                onChange={(v) => setLanguages(v as string[])}
                placeholder="Filter by language"
                multiple
                searchable
                size="sm"
              />
            </div>

            {/* All Filters */}
            <Button variant="outline" size="sm" fullWidth iconLeft={<FilterLine size="md" />}>
              All filters
            </Button>
          </div>

        </div>}

        {/* ── Right: Results ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Mobile: CostBox (compact with link) + action buttons */}
          {!showSidebar && (
            <div style={{ marginBottom: SPACE_S, display: 'flex', flexDirection: 'column', gap: SPACE_S }}>
              {isLoading ? <CostBoxSkeleton /> : (
                <CostBox
                  scenario={scenario}
                  onLearnMore={() => setShowCostModal(true)}
                  onConnect={() => setShowConnectModal(true)}
                  expanded={false}
                />
              )}
              <div style={{
                display: 'flex', alignItems: 'center', gap: SPACE_XS,
              }}>
                <Button variant="outline" size="sm" iconLeft={<FilterLine size="sm" />}>
                  All filters
                </Button>
                <Button variant="outline" size="sm" iconLeft={<MapLine size="sm" />}>
                  Map view
                </Button>
              </div>
            </div>
          )}

          {/* Title + Sort row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: SPACE_L, gap: SPACE_XS,
          }}>
            <h2 style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: showSidebar ? fontSizes[20] : fontSizes[18],
              lineHeight: showSidebar ? '28px' : '24px',
              color: TEXT_DEFAULT, margin: 0,
            }}>
              {scenarioId === 'copay-flat' ? '45' : '89'} in-network {searchQuery ? `${searchQuery} ` : ''}results near you
            </h2>
            <Button variant="outline" size="xs" pill iconRight={<ChevronDownLine size="sm" />}>
              Sort by distance
            </Button>
          </div>

          {/* Provider Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_L }}>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <ProviderCard key={i} layout="responsive" loading />
              ))
            ) : (
              providers.map((provider, i) => (
                <ProviderCard
                  key={i}
                  layout="responsive"
                  name={provider.name}
                  specialty={provider.specialty}
                  photoUrl={provider.photoUrl}
                  providerType={provider.providerType}
                  networkTier={provider.networkTier}
                  networkLabel={provider.networkLabel}
                  distance={provider.distance}
                  address={provider.address}
                  rating={provider.rating}
                  reviewCount={provider.reviewCount}
                  cost={provider.cost}
                  costLevel={provider.costLevel}
                  costLabel={provider.costLabel}
                  nextAppointmentLabel={provider.nextAppointmentLabel}
                  nextAppointmentDate={provider.nextAppointmentDate}
                  onCallClick={() => {}}
                  onBookClick={() => setBookingProvider(provider)}
                  onClick={() => {}}
                />
              ))
            )}
          </div>

          {/* Pagination info */}
          <div style={{
            marginTop: SPACE_XL, paddingTop: SPACE_L,
            borderTop: `1px solid ${BORDER_LIGHT}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: fontSizes[14], color: TEXT_LIGHT,
            }}>
              Showing 1–6 of 89 results
            </span>
          </div>
        </div>
      </div>

      {/* ── Booking Modal ── */}
      <Modal
        open={!!bookingProvider}
        onClose={() => { setBookingProvider(null); setBookingLocation('loc1'); setVisitReason('primary'); setSeenBefore('no') }}
        title="Book online"
        size="sm"
        footerActions={
          <Button variant="primary" onClick={() => { setBookingProvider(null); setBookingLocation('loc1'); setVisitReason('primary'); setSeenBefore('no') }}>
            See available time slots
          </Button>
        }
      >
        {bookingProvider && (
          <div>
            {/* Powered-by banner */}
            <div style={{
              display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: SPACE_XXS,
              padding: `${SPACE_XXS}px ${SPACE_L}px`,
              backgroundColor: BANNER_BG,
              borderBottom: `1px solid ${BORDER_LIGHT}`,
            }}>
              <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[13], color: TEXT_DARK }}>
                Provided by Zocdoc
              </span>
              {/* Zocdoc brand logo — inline SVG exception for third-party brand mark */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="10" cy="10" r="10" fill="#FFF0B8" />
                <text x="10" y="14" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="12" fill="#333">Z</text>
              </svg>
            </div>

            {/* Form content */}
            <div style={{ padding: `${SPACE_L}px ${SPACE_XL}px`, display: 'flex', flexDirection: 'column', gap: SPACE_L }}>
              <Select
                label="Available location (2)"
                value={bookingLocation}
                onChange={setBookingLocation}
                iconLeft={<HospitalBuildingLine size="md" />}
                options={[
                  { value: 'loc1', label: 'Internal Medicine Associates, P.C.' },
                  { value: 'loc2', label: bookingProvider.address },
                ]}
                size="sm"
              />

              <div>
                <Select
                  label="What's the reason for your visit?"
                  value={visitReason}
                  onChange={setVisitReason}
                  options={[
                    { value: 'primary', label: 'Primary care visit' },
                    { value: 'followup', label: 'Follow-up visit' },
                    { value: 'annual', label: 'Annual physical' },
                    { value: 'urgent', label: 'Urgent care' },
                    { value: 'specialist', label: 'Specialist consultation' },
                  ]}
                  size="sm"
                />
                <p style={{
                  fontFamily: FONT, fontWeight: W_REGULAR,
                  fontSize: fontSizes[13], color: TEXT_LIGHT,
                  marginTop: SPACE_XXS,
                }}>
                  Procedures and prices are subject to change and may differ from actual costs. Always consult with the provider for the current procedures and prices.
                </p>
              </div>

              <div>
                <p style={{
                  fontFamily: FONT, fontWeight: W_MEDIUM,
                  fontSize: fontSizes[15], color: TEXT_DEFAULT,
                  marginBottom: SPACE_XS,
                }}>
                  Have you seen this doctor before? <span style={{ color: ERROR_TEXT }}>*</span>
                </p>
                <div style={{ display: 'flex', gap: SPACE_XXS }}>
                  <Button
                    variant={seenBefore === 'yes' ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setSeenBefore('yes')}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={seenBefore === 'no' ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setSeenBefore('no')}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* ── Connect Insurance Modal ── */}
      <Modal
        open={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        title="Connect insurance account"
        size="md"
        footerActions={
          <Button variant="primary" pill onClick={handleConnect}>
            Update info
          </Button>
        }
      >
        <div style={{ padding: `${SPACE_L}px`, display: 'flex', flexDirection: 'column', gap: SPACE_L }}>
          <p style={{
            fontFamily: FONT, fontWeight: W_REGULAR,
            fontSize: fontSizes[16], lineHeight: '19px', color: TEXT_DEFAULT, margin: 0,
          }}>
            Enter your member ID, date of birth and group number to view details about your plan, costs, and spending so far.
          </p>
          <TextInput
            label="Member ID"
            required
            showInfoIcon
            placeholder="Type your member ID"
            defaultValue=""
            size="lg"
          />
          <DatePicker
            label="Date of birth"
            required
            size="lg"
          />
          <TextInput
            label="Group number"
            required
            showInfoIcon
            placeholder="Type your group number"
            defaultValue=""
            size="lg"
          />
        </div>
      </Modal>

      {/* Scenario Switcher removed for experiment */}

      {/* ── Cost Explanation Modal ── */}
      {scenario.modal && (
      <Modal
        open={showCostModal}
        onClose={() => setShowCostModal(false)}
        title="How we calculated your cost"
        size="md"
        footerActions={
          <Button variant="primary" onClick={() => setShowCostModal(false)}>
            Got it
          </Button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* ── Section 1: Plan & Coverage ── */}
          <div style={{ padding: `${SPACE_L}px ${SPACE_L}px`, borderBottom: `1px solid ${BORDER_LIGHT}` }}>
            <p style={{
              fontFamily: FONT, fontWeight: W_MEDIUM,
              fontSize: fontSizes[20], lineHeight: '24px', color: TEXT_DEFAULT, margin: 0,
              marginBottom: SPACE_S,
            }}>
              Your plan & coverage for retinal imaging
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {scenario.modal.coverageRows.map((row, i, arr) => (
                <div key={`${row.label}-${i}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${SPACE_S}px 0` }}>
                    <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DARK }}>{row.label}</span>
                    {row.hasCheck ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT }}>
                        <CheckCrFrLine size="sm" color={SUCCESS_TEXT} />
                        {row.value}
                      </span>
                    ) : (
                      <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DEFAULT }}>{row.value}</span>
                    )}
                  </div>
                  {i < arr.length - 1 && <div style={{ height: 1, background: BORDER_LIGHT }} />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 2: How does it work? ── */}
          <div style={{ padding: `${SPACE_L}px ${SPACE_L}px`, display: 'flex', flexDirection: 'column', gap: SPACE_S }}>
            <p style={{
              fontFamily: FONT, fontWeight: W_MEDIUM,
              fontSize: fontSizes[20], lineHeight: '24px', color: TEXT_DEFAULT, margin: 0,
            }}>
              How does it work?
            </p>
            <p style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: fontSizes[18], lineHeight: '26px', color: TEXT_DARK, margin: 0,
            }}>
              {scenario.modal.explanation}
            </p>

            {/* Before insurance card */}
            {scenario.modal.beforeInsurance && (
            <div style={{
              background: sc.neutral.surface.extraSubtle, borderRadius: RADIUS_XXS,
              padding: `${SPACE_S}px ${SPACE_S}px`,
            }}>
              <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DARK, margin: 0 }}>
                Before insurance
              </p>
              <p style={{
                fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
                fontSize: fontSizes[24], lineHeight: '28px', color: TEXT_DEFAULT, margin: `${SPACE_XXS}px 0 0`,
              }}>
                {scenario.modal.beforeInsurance}
              </p>
              <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DARK, margin: `2px 0 0` }}>
                Providers typically charge
              </p>
            </div>
            )}

            {/* After insurance card */}
            {scenario.modal.afterInsurance && (
            <div style={{
              background: scenario.modal.afterInsuranceColor === 'green' ? sc.success.surface.subtle : BLUE_SUBTLE,
              borderRadius: RADIUS_XXS,
              border: `1px solid ${scenario.modal.afterInsuranceColor === 'green' ? SUCCESS_TEXT : BLUE_500}`,
              padding: `${SPACE_S}px ${SPACE_S}px`,
              display: 'flex', flexDirection: 'column', gap: SPACE_XS,
            }}>
              <p style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16], color: TEXT_DARK, margin: 0 }}>
                After insurance
              </p>
              <div>
                <p style={{
                  fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
                  fontSize: fontSizes[24], lineHeight: '28px',
                  color: scenario.modal.afterInsuranceColor === 'green' ? SUCCESS_TEXT : BLUE_500,
                  margin: 0,
                }}>
                  {scenario.modal.afterInsurance}
                </p>
                {scenario.modal.costPercent && (
                <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DARK, margin: `2px 0 0` }}>
                  Your out of pocket cost ({scenario.modal.costPercent})
                </p>
                )}
              </div>

              {/* Cost bar chart */}
              {scenario.modal.showGraph && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
                <div style={{ display: 'flex', gap: 2, height: 24, width: '100%' }}>
                  <div style={{
                    width: 32, height: '100%', background: GREEN_200,
                    borderRadius: `100px ${RADIUS_XXXS}px ${RADIUS_XXXS}px 100px`, flexShrink: 0,
                  }} />
                  <div style={{
                    width: 80, height: '100%', background: BLUE_500, borderRadius: RADIUS_XXXS,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: BLUE_100, whiteSpace: 'nowrap' }}>
                      Typical cost
                    </span>
                  </div>
                  <div style={{
                    flex: 1, height: '100%', background: RED_100,
                    borderRadius: `${RADIUS_XXXS}px 100px 100px ${RADIUS_XXXS}px`,
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DARK }}>{scenario.modal.graphRangeLow}</span>
                  <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DARK }}>{scenario.modal.graphRangeHigh}</span>
                </div>
              </div>
              )}

              <p style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_LIGHT, margin: 0 }}>
                Based on 42 in-network providers in your area
              </p>
            </div>
            )}

            {/* Disclaimer */}
            <p style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: fontSizes[16], lineHeight: '22px', color: TEXT_LIGHT, margin: 0,
            }}>
              This is an estimate based on typical provider charges and your plan's cost-sharing. Your actual cost may vary depending on the provider you choose and any additional services.
            </p>
          </div>
        </div>
      </Modal>
      )}

      {/* ── FAB: Variant Picker ── */}
      <div style={{ position: 'fixed', bottom: 48, left: SPACE_L, zIndex: 9999 }}>
        {showVariantPicker && (
          <div style={{
            position: 'absolute', bottom: 56, left: 0,
            background: BG_WHITE, borderRadius: RADIUS_XS,
            boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
            border: `1px solid ${BORDER_LIGHT}`,
            padding: `${SPACE_XS}px 0`,
            minWidth: 220, overflow: 'hidden',
          }}>
            {[
              { id: 'compact' as const, label: 'Compact', desc: 'With "How we calculated" link' },
              { id: 'expanded' as const, label: 'Expanded', desc: 'Full cost breakdown inline' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => { setCostVariant(v.id); setShowVariantPicker(false) }}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 2,
                  width: '100%', textAlign: 'left',
                  padding: `${SPACE_XS}px ${SPACE_S}px`,
                  background: costVariant === v.id ? sc.neutral.surface.extraSubtle : 'transparent',
                  border: 'none', cursor: 'pointer',
                }}
              >
                <span style={{
                  fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[14], color: TEXT_DEFAULT,
                }}>
                  {costVariant === v.id ? `✓ ${v.label}` : v.label}
                </span>
                <span style={{
                  fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[12], color: TEXT_LIGHT,
                }}>
                  {v.desc}
                </span>
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setShowVariantPicker(!showVariantPicker)}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            background: TEXT_DEFAULT, border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            color: BG_WHITE, fontSize: 24,
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}
