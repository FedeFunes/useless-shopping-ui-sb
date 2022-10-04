import React, { forwardRef } from "react";

export default forwardRef(function IconChatBubble(
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
        d="M17.123 6.054l-6.284-.04L7.945 6c-.337 0-.66.04-.97.122-1.683.405-2.935 1.93-2.948 3.754L4 14.266c0 .675.162 1.31.458 1.863.054.108.12.216.188.324.135.203.296.405.471.58.7.717 1.67 1.162 2.747 1.162l1.588.014-.013 1.526-.013 2.336 5.17-3.835 2.446.027c2.154.013 3.918-1.729 3.931-3.89l.013-2.147L21 9.984c.013-2.16-1.723-3.916-3.877-3.93z"
        transform="translate(-610 -3) translate(44 3) translate(566)"
      />
    </svg>
  );
});
