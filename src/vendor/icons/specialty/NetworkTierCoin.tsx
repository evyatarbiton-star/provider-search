// ============================================================
// GLOW DS — NetworkTierCoin Icon
// Source: Figma Web DS — Network Tier Badges (node 118:10794)
//
// Two overlapping circles (coins) — back circle is lighter,
// front circle is the main tier color. Used exclusively as
// iconLeft inside Chip for network tier badges.
//
// Usage:
//   import NetworkTierCoin from '@/components/Icon/icons/specialty/NetworkTierCoin'
//   <Chip variant="outline" color="neutral" size="sm"
//     iconLeft={<NetworkTierCoin backColor="#C2E5C3" frontColor="#5BB95E" />}
//   >
//     In-Network
//   </Chip>
// ============================================================

import type { SVGProps } from 'react'
import type { IconSize } from '../Icon.types'
import { resolveIconSize } from '../Icon.types'

export interface NetworkTierCoinProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  /** Back coin color (lighter) */
  backColor: string
  /** Front coin color (darker / main tier color) */
  frontColor: string
  /** DS size token or custom pixel value. Default: 'sm' (16px) */
  size?: IconSize | number
}

const COIN_PATH =
  'M0 5.96C0 9.25 2.67 11.92 5.96 11.92C9.25 11.92 11.92 9.25 11.92 5.96C11.92 2.67 9.25 0 5.96 0C2.67 0 0 2.67 0 5.96Z'

const SvgNetworkTierCoin = ({
  backColor,
  frontColor,
  size = 'sm',
  ...props
}: NetworkTierCoinProps) => {
  const px = resolveIconSize(size)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* Back coin — lighter, offset top-left */}
      <g transform="translate(2.5, 1.1)">
        <path d={COIN_PATH} fill={backColor} />
      </g>
      {/* Front coin — darker, offset bottom-right */}
      <g transform="translate(5.6, 6.7)">
        <path d={COIN_PATH} fill={frontColor} />
      </g>
    </svg>
  )
}

export default SvgNetworkTierCoin
