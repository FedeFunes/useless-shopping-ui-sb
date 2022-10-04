import React, { forwardRef } from "react";

export default forwardRef(function IconCheckCircle(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
      {...props}
      ref={ref}
    >
      <path d="M13.847.785c7.213 0 13.062 5.848 13.062 13.062 0 7.214-5.849 13.062-13.062 13.062-7.215 0-13.062-5.847-13.062-13.062C.785 6.632 6.632.785 13.847.785zm0 1.5c-6.387 0-11.562 5.176-11.562 11.562 0 6.387 5.175 11.562 11.562 11.562 6.385 0 11.562-5.177 11.562-11.562S20.232 2.285 13.847 2.285zm6.084 7.133c.348.372.356.94.038 1.322l-.087.091-8.03 7.494c-.363.34-.914.357-1.297.058l-.092-.082-2.676-2.676c-.39-.39-.39-1.024 0-1.414.36-.36.928-.389 1.32-.084l.094.084 1.993 1.993 7.324-6.835c.403-.377 1.036-.355 1.413.049z" />
    </svg>
  );
});
