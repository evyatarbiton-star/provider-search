import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgMap = ({
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
        d="M8.308 4.047a3 3 0 0 1 1.521.125l5.008 1.77a1 1 0 0 0 .507.042l3.134-.554A3 3 0 0 1 22 8.384v7.938a3 3 0 0 1-2.478 2.955l-3.83.676a3 3 0 0 1-1.521-.125l-5.008-1.77a1 1 0 0 0-.507-.042l-3.134.554A3 3 0 0 1 2 15.616V7.678a3 3 0 0 1 2.478-2.955zM4.826 6.693 8 6.133V16.1l-2.826.5A1 1 0 0 1 4 15.615V7.678a1 1 0 0 1 .826-.985M14 17.646l-4-1.413v-9.88l4 1.414zm2 .222 3.174-.56a1 1 0 0 0 .826-.986V8.384a1 1 0 0 0-1.174-.984L16 7.899z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMap;
