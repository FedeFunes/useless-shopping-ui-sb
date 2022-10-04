import React, { forwardRef } from "react";

export default forwardRef(function FravegaIcon(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="26"
      viewBox="0 0 32 26"
      {...props}
      ref={ref}
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                fill="#409"
                d="M28.062 11.174S29.465 4.132 7.426.32c0 0-4.05-.747-4.858.045-.75.73 2.368 1.714 2.368 1.714 5.912 2.073 12.478 5.288 12.645 9.364 0 0 1.443 5.088-12.555 9.973 0 0-2.91.925-2.527 1.68.286.558 3.191-.118 4.326-.355 10.312-2.412 21.137-6.217 21.237-11.566z"
                transform="translate(-54 -12) translate(54 12) translate(1.56 1.345)"
              />
              <path
                fill="#B01886"
                d="M16.253 11.453S17.19 7.01 4.434 2.722c-.396-.114-2.036-.575-2.812.116-.643.574 1.233 1.643 1.233 1.643C5.31 6.168 7.67 8.487 7.587 11.167c-.078 2.411-2.289 4.582-5.318 6.404 0 0-2.853 1.58-2.16 2.5.798 1.071 3.054.302 4.185-.02 6.124-2.01 11.94-4.892 11.96-8.598z"
                transform="translate(-54 -12) translate(54 12) translate(1.56 1.345)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});
