import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgHome = ({
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
        d="M6 6a1 1 0 0 1 1 1v8.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C9.361 19 9.943 19 10.8 19h2.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V7a1 1 0 1 1 2 0v8.241c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044h-2.483c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C5 16.71 5 16.046 5 15.242V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 15a1 1 0 0 0-1 1v3H9v-3a3 3 0 1 1 6 0v3h-2v-3a1 1 0 0 0-1-1M3.106 8.447a1 1 0 0 0 1.341.447L12 5.118l7.553 3.776a1 1 0 1 0 .894-1.789l-8-4a1 1 0 0 0-.894 0l-8 4a1 1 0 0 0-.447 1.342"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHome;
