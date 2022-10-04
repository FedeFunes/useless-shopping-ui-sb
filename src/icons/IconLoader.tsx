import React, { forwardRef } from "react";

export default forwardRef(function IconMarker(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{ background: "none" }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#d7d7d7"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(197.949 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  );
});
