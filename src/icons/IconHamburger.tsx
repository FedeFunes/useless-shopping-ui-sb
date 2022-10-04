import React, { forwardRef } from "react";

export default forwardRef(function IconHamburguer(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      {...props}
      ref={ref}
    >
      <path
        fill="currentcolor"
        d="M23 20.021v-2.45H3v2.45h20zm0-6.235v-2.5H3v2.5h20zM3 5v2.5h20V5H3z"
      />
    </svg>
  );
});
