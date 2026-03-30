import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgChevronDown = ({
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
        d="M18.707 8.293a1 1 0 0 0-1.414 0L12 13.586 6.707 8.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronDown;
