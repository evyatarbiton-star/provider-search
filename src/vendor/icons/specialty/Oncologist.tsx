import type { SpecialtyIconProps } from "../Icon.types";
const SvgOncologist = ({
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
      <g clipPath="url(#Oncologist_svg__a)">
        <g clipPath="url(#Oncologist_svg__b)">
          <path
            fill="#FE9767"
            d="M12.544 17.088a8.544 8.544 0 1 0 0-17.088 8.544 8.544 0 0 0 0 17.088"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M18.376 31.024 18 26.856s4.696.784 6.016-1.136c.84-1.216.696-3.888.464-6.08l3.192-.112S30.096.704 16.128 1.904C-.52 3.328 7.92 31.024 7.92 31.024"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M19.488 22.549s1.24.712 3.56.32"
          />
        </g>
      </g>
      <defs>
        <clipPath id="Oncologist_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Oncologist_svg__b">
          <path fill="#fff" d="M4 0h24.48v31.664H4z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgOncologist;
