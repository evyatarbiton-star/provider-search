import type { SpecialtyIconProps } from "../Icon.types";
const SvgTelehealth = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#Telehealth_svg__a)">
        <path
          fill="#FE9767"
          d="M12.512 15.947c-1.536-3.424-7.88-4.784-9.208.384-1.56 6.056 8.984 12.304 8.984 12.304s9.272-5.273 9.264-10.873c0-4.808-7.28-6.511-9.04-1.824z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="m.944 25.52.24-18.264 22.272-.4.304 18.664H2.688M25.56 11.91l5.208-2.729V23.19l-5.2-2.8"
        />
      </g>
      <defs>
        <clipPath id="Telehealth_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgTelehealth;
