import React, { forwardRef } from "react";

export default forwardRef(function ChevronRight(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      {...props}
      ref={ref}
    >
      <defs>
        <filter id="affts8xwka" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <g
                filter="url(#affts8xwka)"
                transform="translate(-318.000000, -152.000000) translate(43.000000, 129.000000) translate(0.000000, 14.000000) translate(275.043478, 9.000000)"
              >
                <g>
                  <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M.111.15C.255-.013.493-.045.672.064L.737.11l5.76 5.096c.177.156.197.42.059.6l-.06.063-5.76 5.096c-.183.162-.463.145-.625-.039-.144-.163-.146-.402-.016-.567l.055-.058 5.384-4.763L.15.775C-.013.63-.045.394.064.214L.11.15z"
                    transform="translate(3.046154, 0.461541)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});
