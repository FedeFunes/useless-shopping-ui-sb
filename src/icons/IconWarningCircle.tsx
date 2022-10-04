import React, { forwardRef } from "react";

export default forwardRef(function IconWarningCircle(
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
      <path
        fill="currentcolor"
        d="M12.705 0C19.722 0 25.41 5.693 25.41 12.708c0 7.015-5.688 12.702-12.705 12.702S0 19.717 0 12.702C0 5.687 5.688 0 12.705 0zm0 2.42C7.024 2.42 2.42 7.028 2.42 12.708c0 5.68 4.604 10.282 10.285 10.282S22.99 18.382 22.99 12.702C22.984 7.028 18.38 2.426 12.705 2.42zm-.011 13.59c1.06 0 1.759.747 1.781 1.792 0 1.023-.698 1.792-1.781 1.792-1.084 0-1.804-.77-1.804-1.792 0-1.045.743-1.793 1.804-1.793zm1.781-10.398l-.497 8.47h-2.572l-.516-8.47h3.585z"
      />
    </svg>
  );
});
