import React, { forwardRef } from "react";

export default forwardRef(function Chevron(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 13 22" {...props} ref={ref}>
      <path strokeWidth="2" d="M1 1l10 10L1 21" />
    </svg>
  );
});
