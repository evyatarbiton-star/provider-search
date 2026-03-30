import type { SpecialtyIconProps } from "../Icon.types";
const SvgUrgentCare = ({
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
      <g clipPath="url(#UrgentCare_svg__a)">
        <g clipPath="url(#UrgentCare_svg__b)">
          <g clipPath="url(#UrgentCare_svg__c)">
            <path
              fill="#FE9767"
              d="M15.992 0C7.216 0 0 7.216 0 15.992v.056l15.992-.056h15.992C31.976 7.216 24.76 0 15.992 0"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M3.944 27.24 2.84 31.312h26.784L28.12 27.24zM25.232 15.272c-.32-5.072-4.12-9.2-9.2-9.2s-9.2 4.12-9.2 9.2S7.4 27.24 7.4 27.24h17.76s.384-7.208.08-11.968z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M18.24 15.992c-.048-1.24-1.008-2.248-2.248-2.248s-2.408 1.016-2.408 2.488.16 11.008.16 11.008h4.504s.072-9.248 0-11.248zM2.84 10.232l2.472.712M26.44 10.944l2.304-1.272"
            />
          </g>
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M10.648 5.208 9.456 3.056M20.136 4.806l.96-2.312"
          />
        </g>
      </g>
      <defs>
        <clipPath id="UrgentCare_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="UrgentCare_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="UrgentCare_svg__c">
          <path fill="#fff" d="M0 0h31.976v31.952H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgUrgentCare;
