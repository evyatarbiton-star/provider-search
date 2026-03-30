import type { SpecialtyIconProps } from "../Icon.types";
const SvgObGyn = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#OB-GYN_svg__a)">
        <g clipPath="url(#OB-GYN_svg__b)">
          <path
            fill="#FE9767"
            d="M15.76.8c.664 0 1.376.104 2.096.264 3.232.736 5.256 4.456 4.296 8.048s-2.776 6.712-6.392 9.12c-3.624-2.408-5.464-5.624-6.392-9.12-.96-3.584 1.064-7.304 4.296-8.048C14.376.904 15.096.8 15.76.8"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M6.016 10c0 3.784 1.96 9.168 5.784 10.928 0 0-.88 4.992 2.056 9.112"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M29.456 18.392c2.808-3.944 1.496-10.216-4.24-10.792-2.664-.272-6.064-2.496-9.464-2.496S8.92 7.328 6.248 7.6c-5.264.528-6.752 6.024-4.76 10.032.16.312.336.624.536.912"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M2.52 19.08c.768.704 2.288.888 2.648-.368.336-1.152-.952-1.896-1.952-1.912-1.128-.016-2.528.608-.704 2.28zM28.888 19.08c-.768.704-2.288.888-2.648-.368-.336-1.152.952-1.896 1.952-1.912 1.128-.016 2.528.608.704 2.28zM25.456 10c0 3.784-1.96 9.536-5.784 11.304 0 0 .88 4.624-2.056 8.744"
          />
        </g>
      </g>
      <defs>
        <clipPath id="OB-GYN_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
        <clipPath id="OB-GYN_svg__b">
          <path fill="#fff" d="M0 .8h31.512v29.88H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgObGyn;
