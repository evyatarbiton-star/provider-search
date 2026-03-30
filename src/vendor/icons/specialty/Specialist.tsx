import type { SpecialtyIconProps } from "../Icon.types";
const SvgSpecialist = ({
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
      <g clipPath="url(#Specialist_svg__a)">
        <g clipPath="url(#Specialist_svg__b)">
          <path
            fill="#FE9767"
            d="m16.84 4.744 2.552 5.688c.24.536.744.896 1.32.96l6.2.664c1.408.152 1.976 1.896.928 2.848l-4.624 4.184a1.64 1.64 0 0 0-.504 1.552l1.28 6.104c.288 1.392-1.192 2.472-2.424 1.76L16.16 25.4a1.65 1.65 0 0 0-1.632 0L9.12 28.504c-1.232.704-2.72-.376-2.424-1.76l1.28-6.104a1.64 1.64 0 0 0-.504-1.552l-4.624-4.184c-1.056-.952-.488-2.704.928-2.848l6.2-.664a1.63 1.63 0 0 0 1.32-.96l2.552-5.688c.584-1.296 2.416-1.296 3 0z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M10.136 2.032c-1.672 0-3.928.168-3.928 8.448s8.944 10.312 8.944 10.312"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M13.512 2.032c0 1.032-.904 1.368-1.936 1.368s-1.44-.328-1.44-1.368.4-1.392 1.44-1.392 1.936.352 1.936 1.392M20.752 2.032c1.672 0 3.544.168 3.544 8.448 0 7.952-8.944 10.312-8.944 10.312s-.568 10.864 6.872 10.864c6.312 0 6.312-7.992 6.312-7.992M17.112 2.032c0 1.032.904 1.368 1.936 1.368s1.44-.328 1.44-1.368-.4-1.392-1.44-1.392-1.936.352-1.936 1.392"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M28.536 23.664a2.808 2.808 0 1 0 0-5.616 2.808 2.808 0 0 0 0 5.616"
          />
        </g>
      </g>
      <defs>
        <clipPath id="Specialist_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="Specialist_svg__b">
          <path fill="#fff" d="M0 0h31.976v32.296H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSpecialist;
