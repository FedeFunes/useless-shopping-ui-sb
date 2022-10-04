import React, { forwardRef } from "react";

export default forwardRef(function IconArrowBack(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      {...props}
      ref={ref}
    >
      <defs>
        <filter id="4ofcmy3nra" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 0 0.290196 0 0 0 1.000000 0"
          />
        </filter>
        <path
          id="my4jbh0nlb"
          d="M13.74.352c.351.397.342.986 0 1.372l-.093.093L3.75 10.5h19.21c.575 0 1.04.448 1.04 1 0 .513-.401.936-.918.993l-.122.007H3.754l9.893 8.683c.398.35.464.935.174 1.362l-.08.103c-.35.397-.938.463-1.365.173l-.103-.08L.353 12.28c-.265-.233-.38-.567-.347-.888l.001-.008c.024-.209.108-.406.252-.569l.094-.093L12.273.26c.43-.379 1.088-.337 1.468.093z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g
            filter="url(#4ofcmy3nra)"
            transform="translate(-20.000000, -18.000000) translate(20.000000, 18.000000)"
          >
            <g transform="translate(1.000000, 1.500000)">
              <use fill="#000" fillRule="nonzero" href="#my4jbh0nlb" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});
