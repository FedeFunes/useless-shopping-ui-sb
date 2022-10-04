import React, { forwardRef } from "react";

export default forwardRef(function IconChatBubbleOutlined(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 34 34" {...props} ref={ref}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.54 20.82a12.905 12.905 0 0 1-2.04-.45l-7.083 2.87 2.834-5.022C2.02 16.412.709 13.734.709 10.95.709 5.456 6.099 1 12.75 1c6.65 0 12.041 4.456 12.041 9.95" />
        <path d="M13.458 23.24c0 6.151 7.084 10.76 13.459 7.89l5.666 2.153-2.125-4.305c1.836-1.488 2.834-3.446 2.834-5.739 0-4.525-4.44-8.609-9.917-8.609-5.477 0-9.917 4.084-9.917 8.61z" />
      </g>
    </svg>
  );
});
