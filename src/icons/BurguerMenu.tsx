import React, { forwardRef } from "react";

export default forwardRef(function BurguerMenu(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M2.333 3.5h9.334M2.333 7h9.334m-9.334 3.5h9.334"
        stroke="#111827"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
        strokeDasharray="0,0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
