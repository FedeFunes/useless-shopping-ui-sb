import React, { forwardRef } from "react";

export default forwardRef(function IconClose(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 26 26"
    >
      <defs>
        <filter id="vl2ad7a9ya" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 1.000000 0"
          />
        </filter>
        <path
          id="qo0v6jobmb"
          d="M12.9 11l8.706-8.706c.525-.525.525-1.376 0-1.901-.524-.524-1.375-.524-1.9 0L11 9.1 2.293.393C1.77-.131.92-.131.393.393c-.523.525-.523 1.376 0 1.901L9.102 11 .394 19.705c-.524.526-.526 1.378 0 1.901.525.523 1.506.394 1.9 0L11 12.9l8.706 8.707c.447.445 1.365.536 1.9 0 .525-.525.525-1.375 0-1.9L12.9 11z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g
            filter="url(#vl2ad7a9ya)"
            transform="translate(-314.000000, -20.000000) translate(314.000000, 20.000000)"
          >
            <g transform="translate(1.999437, 2.000000)">
              <use fill="#000" href="#qo0v6jobmb" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});
