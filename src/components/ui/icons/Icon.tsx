import { icons } from "./icons";
import type { IconProps } from "./icons.types";

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  className = "",
}: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ color: color }}
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
