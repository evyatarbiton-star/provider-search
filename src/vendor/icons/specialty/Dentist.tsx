import type { SpecialtyIconProps } from "../Icon.types";
const SvgDentist = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#Dentist_svg__a)">
        <g clipPath="url(#Dentist_svg__b)">
          <g clipPath="url(#Dentist_svg__c)">
            <path
              fill="#FE9767"
              d="M23.616 16.304a8.152 8.152 0 1 0 0-16.304 8.152 8.152 0 0 0 0 16.304"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.28}
              d="M12.624 23.312c1.864 0 2.384 3.576 3.312 5.632.76 1.696 3.152 3.232 5.016.056 1.008-1.72 3.072-6.984 3.576-12.984.357-4.271-.465-7.117-1.728-8.72m-1.6-1.294c-4.072-1.056-6.336 2.166-8.576 2.166S8.672 4.736 4.6 5.8C2.32 6.4.184 9.6.72 16.024c.496 6 2.568 11.264 3.576 12.984 1.864 3.176 4.256 1.64 5.016-.056.928-2.056 1.448-5.632 3.312-5.632"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="Dentist_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Dentist_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Dentist_svg__c">
          <path fill="#fff" d="M0 0h31.76v31.488H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgDentist;
