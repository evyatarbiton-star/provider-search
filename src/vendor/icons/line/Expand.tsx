import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgExpand = ({
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
        d="M14.293 8.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0-1.414-1.414zM3.293 19.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0-1.414-1.414zM20.707 20.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0M9.707 8.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 1.414-1.414z"
      />
      <path
        fill={color}
        d="M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0zM3 20a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H5v-4a1 1 0 1 0-2 0zM4 3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V5h4a1 1 0 0 0 0-2zM21 20a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0z"
      />
    </svg>
  );
};
export default SvgExpand;
