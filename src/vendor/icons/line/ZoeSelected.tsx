import type { IconProps } from "../Icon.types";
import { resolveIconSize } from "../Icon.types";
const SvgZoeSelected = ({
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
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M11.912 8.15a6.93 6.93 0 0 0-6.993-.23c-.072.036-.144.068-.211.109C1.352 9.986.205 14.314 2.14 17.7l2.778-1.619a7.08 7.08 0 0 1 3.694-6.004 6.9 6.9 0 0 1 2.63-.801c.215-.052.438-.085.665-.085.434 0 .845.105 1.211.286.012.004.024.012.036.016.048.024.096.053.14.077q.07.042.135.084l.032.025q.24.162.442.374a7 7 0 0 0-2-1.9z"
        />
        <path
          fill="url(#c)"
          d="M8.61 13.923a7.1 7.1 0 0 1 .63-2.702 2.75 2.75 0 0 1 1.108-1.546q.02-.012.031-.025l.136-.084q.07-.04.14-.077c.011-.004.023-.012.035-.016q.26-.127.542-.201a6.9 6.9 0 0 0-2.63.801 7.07 7.07 0 0 0-3.694 6.004c0 .08-.012.161-.012.242 0 3.91 3.137 7.08 7.006 7.08V20.16a7.09 7.09 0 0 1-3.3-6.238z"
        />
        <path
          fill="url(#d)"
          d="M18.904 16.081a6.94 6.94 0 0 1-6.993-.23 7 7 0 0 1-2-1.9 3 3 0 0 1-.407-.54 2.8 2.8 0 0 1-.359-1.203v-.403q.02-.291.1-.576a7.1 7.1 0 0 0-.63 2.702 7.09 7.09 0 0 0 3.3 6.238q.099.067.199.128c3.35 1.957 7.635.794 9.571-2.593l-2.777-1.619z"
        />
        <path
          fill="url(#e)"
          d="M14.68 12.204a3 3 0 0 1-.1.575c.395-.87.602-1.787.63-2.702a7.09 7.09 0 0 0-3.3-6.237q-.099-.067-.199-.129C8.36 1.754 4.072 2.914 2.14 6.301l2.777 1.618a6.94 6.94 0 0 1 6.993.23c.77.483 1.45 1.119 2 1.9a2.731 2.731 0 0 1 .765 1.744v.402z"
        />
        <path
          fill="url(#f)"
          d="M11.913.598v3.237a7.09 7.09 0 0 1 3.3 6.238 7.1 7.1 0 0 1-.63 2.702c-.06.213-.144.427-.26.628-.218.383-.513.689-.848.918q-.019.012-.032.024-.066.043-.14.085a2 2 0 0 1-.175.093 3 3 0 0 1-.542.2 6.9 6.9 0 0 0 2.63-.8 7.07 7.07 0 0 0 3.694-6.005c0-.08.012-.16.012-.241-.004-3.91-3.14-7.08-7.009-7.08"
        />
        <path
          fill="url(#g)"
          d="m21.68 6.3-2.778 1.619a7.08 7.08 0 0 1-3.694 6.004 6.9 6.9 0 0 1-2.63.801 2.8 2.8 0 0 1-.665.085c-.435 0-.845-.105-1.212-.286-.012-.004-.024-.012-.036-.016-.048-.024-.095-.053-.14-.077-.047-.028-.09-.056-.139-.084q-.016-.012-.032-.025a3 3 0 0 1-.442-.374 7 7 0 0 0 2 1.9 6.93 6.93 0 0 0 6.994.23c.072-.036.143-.068.21-.109 3.352-1.957 4.5-6.286 2.567-9.672z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={0.28}
          x2={10.824}
          y1={15.877}
          y2={8.022}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.81} stopColor="#F94D1E" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={10.021}
          x2={7.609}
          y1={24.373}
          y2={10.738}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.81} stopColor="#F94D1E" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={22.367}
          x2={9.041}
          y1={20.366}
          y2={15.273}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.86} stopColor="#F94D1E" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={3.829}
          x2={14.709}
          y1={2.628}
          y2={10.705}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.81} stopColor="#F94D1E" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={11.479}
          x2={16.976}
          y1={-0.018}
          y2={13.246}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.81} stopColor="#F94D1E" />
        </linearGradient>
        <linearGradient
          id="g"
          x1={23.779}
          x2={13.688}
          y1={7.838}
          y2={15.467}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FDCBB6" />
          <stop offset={0.9} stopColor="#F94D1E" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M1.2.6h21.418v22.8H1.2z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgZoeSelected;
