import React, { forwardRef } from "react";

export default forwardRef(function IconCog(
  props: React.SVGProps<SVGSVGElement>,
  ref: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      {...props}
      ref={ref}
    >
      <path
        fill="currentcolor"
        d="M12.5 15.667c-1.746 0-3.167-1.421-3.167-3.167 0-1.746 1.42-3.167 3.167-3.167 1.746 0 3.167 1.421 3.167 3.167 0 1.746-1.42 3.167-3.167 3.167m9.104-4.75h-2.26c-.158-.626-.36-1.32-.616-1.847l1.609-1.608c.155-.155.155-.405 0-.56l-2.24-2.238c-.154-.156-.404-.156-.56 0L15.93 6.272c-.528-.257-1.221-.458-1.846-.615V3.396c0-.219-.177-.396-.396-.396h-2.374c-.219 0-.396.177-.396.396v2.26c-.626.158-1.32.36-1.846.616l-1.61-1.608c-.154-.156-.405-.156-.559 0l-2.24 2.238c-.154.154-.154.405 0 .56l1.61 1.61c-.255.524-.458 1.218-.616 1.845h-2.26c-.219 0-.396.177-.396.396v2.374c0 .219.177.396.396.396h2.26c.158.627.361 1.32.616 1.847l-1.61 1.609c-.155.154-.155.404 0 .559l2.24 2.239c.149.149.412.149.56 0l1.61-1.609c.523.256 1.218.457 1.845.617v2.26c0 .218.177.395.396.395h2.374c.219 0 .396-.177.396-.396v-2.26c.626-.16 1.32-.36 1.846-.616l1.61 1.609c.154.155.404.155.559 0l2.239-2.24c.155-.154.155-.404 0-.558l-1.609-1.61c.256-.525.458-1.22.616-1.846h2.26c.219 0 .396-.177.396-.396v-2.374c0-.219-.177-.396-.396-.396"
        transform="translate(-197 -5) translate(44 3) translate(153 2)"
      />
    </svg>
  );
});