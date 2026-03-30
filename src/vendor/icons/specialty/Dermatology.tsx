import type { SpecialtyIconProps } from "../Icon.types";
const SvgDermatology = ({
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
      <g clipPath="url(#Dermatology_svg__a)">
        <g clipPath="url(#Dermatology_svg__b)">
          <g clipPath="url(#Dermatology_svg__c)">
            <path
              fill="#FE9767"
              d="M10.744 3.112c.072-.672-.76-.984-1.096-.408-2.672 4.664-4.552 12.048-2.792 15.96 2.08 4.608 8.552 1.584 5.616-3.552-2.12-3.72-2.12-8.568-1.736-12zM23.008 3.112c.072-.672-.76-.984-1.096-.408-2.672 4.664-4.552 12.048-2.792 15.96 2.08 4.608 8.552 1.584 5.616-3.552-2.12-3.72-2.12-8.568-1.736-12z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M.64 30.928V15.264s6.2-1.264 17.552-.632 13 .632 13 .632l-.08 15.664M29.016 30.928H2.648"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M2.752 24.056s6.12-1.336 13.944-.544 12.368.152 12.368.152M2.752 26.512s6.12-1.336 13.944-.544 12.368.152 12.368.152"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Dermatology_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Dermatology_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Dermatology_svg__c">
          <path fill="#fff" d="M0 2.4h31.832v29.168H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgDermatology;
