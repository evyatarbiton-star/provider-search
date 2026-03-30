import type { SVGProps } from 'react'

/**
 * Icon size tokens — maps DS size names to pixel values.
 *
 *   xs  14px — inside Chip sm
 *   sm  16px — inside Chip, small UI elements
 *   md  20px — inside Button, TextInput (default)
 *   lg  24px — inside Button lg, standalone icons
 *   xl  32px — hero sections, empty states
 */
export const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const

export type IconSize = keyof typeof ICON_SIZES

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  /** DS size token or custom pixel value */
  size?: IconSize | number
  /** SVG color — defaults to 'currentColor' (inherits text color) */
  color?: string
}

/**
 * Resolves a size prop to a pixel number.
 */
export function resolveIconSize(size: IconSize | number = 'md'): number {
  return typeof size === 'number' ? size : ICON_SIZES[size]
}

// ── Specialty (brand / illustration) icons ──────────────────

export type SpecialtyIconSize = 'sm' | 'lg'

export interface SpecialtyIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  /** 'sm' = 32px, 'lg' = 40px, or a custom pixel value. Default: 32 */
  size?: SpecialtyIconSize | number
}
