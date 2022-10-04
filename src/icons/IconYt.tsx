import React, { forwardRef } from "react";

export default forwardRef(function IconYt(
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
        d="M18.43 4H5.57C3.045 4 1 6.102 1 8.696v6.608C1 17.898 3.046 20 5.57 20h12.86c2.524 0 4.57-2.102 4.57-4.696V8.696C23 6.102 20.954 4 18.43 4zm-3.09 8.322L9.326 15.27a.242.242 0 0 1-.346-.224V8.964c0-.185.19-.305.351-.221l6.016 3.133a.251.251 0 0 1-.005.446z"
      />
    </svg>
  );
});
