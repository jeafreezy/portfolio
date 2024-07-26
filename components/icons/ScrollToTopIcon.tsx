import { SVGProps } from "react";

export default function ScrollToTopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="nonzero"
        d="M20 12l6 5.656-1.5 1.414-3.44-3.242V28h-2.12V15.828L15.5 19.07 14 17.656z"
      />
    </svg>
  );
}
