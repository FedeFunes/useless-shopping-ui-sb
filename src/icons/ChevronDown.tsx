import React, { forwardRef } from "react";

export default forwardRef(function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <defs>
        <filter id="doh6kipifa" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <g
                filter="url(#doh6kipifa)"
                transform="translate(-115.000000, -103.000000) translate(0.500000, 88.000000) translate(42.500000, 13.000000) translate(72.000000, 2.000000)"
              >
                <g>
                  <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M.111.15C.255-.013.493-.045.672.064L.737.11l5.76 5.096c.177.156.197.42.059.6l-.06.063-5.76 5.096c-.183.162-.463.145-.625-.039-.144-.163-.146-.402-.016-.567l.055-.058 5.384-4.763L.15.775C-.013.63-.045.394.064.214L.11.15z"
                    transform="translate(6.000000, 6.830769) scale(-1, 1) rotate(-270.000000) translate(-6.000000, -6.830769) translate(2.676924, 1.292307)"
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
