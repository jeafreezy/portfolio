import { SVGProps } from "react";

export default function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 9.5L12 14.5L7 9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
