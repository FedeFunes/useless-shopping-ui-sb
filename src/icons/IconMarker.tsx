import React, { forwardRef } from "react";

export default forwardRef(function IconMarker(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      viewBox="-1 -1 26 34"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path d="M11.501-1C14.82-1 17.95.184 20.308 2.34c4.335 3.959 4.935 11.28 1.385 15.88l-.195.245-9.997 13.19-9.987-13.177c-3.777-4.6-3.23-12.111 1.18-16.139C5.054.184 8.182-1 11.501-1zm0 2C8.676 1 6.03 2.002 4.043 3.816.488 7.063-.023 13.19 2.908 17.017l.176.223 8.417 11.104 8.428-11.118c2.992-3.644 2.688-9.61-.562-13.01l-.202-.206-.206-.194C16.973 2.002 14.326 1 11.5 1zm.574 4.667c2.764 0 5.025 2.185 5.025 4.889s-2.261 4.888-5.025 4.888c-2.764 0-5.025-2.184-5.025-4.888 0-2.704 2.261-4.89 5.025-4.89zm0 2c-1.674 0-3.025 1.305-3.025 2.889 0 1.583 1.35 2.888 3.025 2.888 1.674 0 3.025-1.305 3.025-2.888 0-1.584-1.35-2.89-3.025-2.89z" />
    </svg>
  );
});
