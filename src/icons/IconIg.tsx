import React, { forwardRef } from "react";

export default forwardRef(function IconIg(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M16.017 2a5.954 5.954 0 0 1 5.948 5.948v8.07a5.954 5.954 0 0 1-5.948 5.947h-8.07A5.954 5.954 0 0 1 2 16.017v-8.07A5.954 5.954 0 0 1 7.948 2h8.07zm3.94 14.017v-8.07a3.94 3.94 0 0 0-3.94-3.939h-8.07a3.94 3.94 0 0 0-3.939 3.94v8.07a3.94 3.94 0 0 0 3.94 3.939h8.07a3.94 3.94 0 0 0 3.939-3.94zM11.982 6.82a5.17 5.17 0 0 1 5.164 5.163 5.17 5.17 0 0 1-5.164 5.164 5.17 5.17 0 0 1-5.163-5.164 5.17 5.17 0 0 1 5.163-5.163zm0 8.319a3.155 3.155 0 1 0 0-6.31 3.155 3.155 0 0 0 0 6.31zm5.174-7.043a1.237 1.237 0 1 1 0-2.475 1.237 1.237 0 0 1 0 2.475z"
      />
    </svg>
  );
});
