import React, { forwardRef } from "react";

export default forwardRef(function SearchIcon(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 19 19" {...props} ref={ref}>
      <path
        fill="currentcolor"
        fillRule="nonzero"
        stroke="currentcolor"
        d="M1.565 6.486c-.348 2.122.526 4.258 2.288 5.592 1.762 1.334 4.14 1.66 6.223.852 2.083-.808 3.55-2.624 3.84-4.754.436-3.232-1.926-6.2-5.304-6.661-3.377-.462-6.516 1.753-7.047 4.972v-.001zM15.11 8.341c-.357 2.532-2.11 4.687-4.59 5.644-2.48.957-5.308.57-7.407-1.015C1.013 11.386-.034 8.848.368 6.321.983 2.461 4.74-.203 8.787.351c4.046.554 6.868 4.12 6.322 7.99h0zm-2.966 4.78c-.222-.227-.215-.581.015-.8.23-.22.6-.226.838-.015l4.025 3.845c.222.227.215.58-.015.8-.23.22-.6.226-.838.015l-4.025-3.845z"
        transform="translate(-960 -66) translate(945.89 54) translate(15.022 13)"
      />
    </svg>
  );
});
