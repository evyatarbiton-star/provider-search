import type { SpecialtyIconProps } from "../Icon.types";
const SvgPrimaryCare = ({
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
      <g clipPath="url(#PrimaryCare_svg__a)">
        <g clipPath="url(#PrimaryCare_svg__b)">
          <path
            fill="#FE9767"
            d="M13.144 11.704c-1.832-4.072-9.376-5.696-10.96.456C.328 19.36 12.872 26.8 12.872 26.8s11.032-6.272 11.024-12.928c0-5.72-8.656-7.744-10.752-2.168"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M7.936 2.032c-1.672 0-3.928.168-3.928 8.448s8.944 10.312 8.944 10.312"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M11.312 2.032c0 1.032-.904 1.368-1.936 1.368s-1.44-.328-1.44-1.368S8.336.64 9.376.64s1.936.352 1.936 1.392M18.16 2.032c1.672 0 3.928.168 3.928 8.448 0 7.952-8.944 10.312-8.944 10.312S12.56 31.201 20 31.201c5.6 0 6-5.6 6-5.6"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M14.784 2.032c0 1.032.904 1.368 1.936 1.368s1.44-.328 1.44-1.368S17.76.64 16.72.64c-1.032 0-1.936.352-1.936 1.392M26.328 23.664a2.808 2.808 0 1 0 0-5.616 2.808 2.808 0 0 0 0 5.616"
          />
        </g>
      </g>
      <defs>
        <clipPath id="PrimaryCare_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="PrimaryCare_svg__b">
          <path fill="#fff" d="M2.4 0h27.776v32.296H2.4z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPrimaryCare;
