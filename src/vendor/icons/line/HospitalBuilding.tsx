import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgHospitalBuilding = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 4a4 4 0 0 0-4 4v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a4 4 0 0 0-4-4h-2V8a4 4 0 0 0-4-4zm10 7v7h3a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2zm-2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h9V9"
        clipRule="evenodd"
      />
      <path fill={color} d="M7 17a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3H7z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 8a1 1 0 0 0-1 1v1H7a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V9a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHospitalBuilding;
