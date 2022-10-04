import React, { forwardRef } from "react";

export default forwardRef(function IconFb(
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
        d="M19.296 2H4.694A2.694 2.694 0 0 0 2 4.694v14.602a2.694 2.694 0 0 0 2.694 2.694h7.201l.013-7.144h-1.856a.438.438 0 0 1-.438-.436l-.009-2.302c0-.243.195-.44.438-.44h1.852V9.443c0-2.582 1.577-3.988 3.88-3.988h1.89c.242 0 .438.196.438.438v1.942a.438.438 0 0 1-.437.438h-1.16c-1.253 0-1.495.596-1.495 1.469v1.926h2.752c.262 0 .466.23.435.49l-.273 2.302a.438.438 0 0 1-.435.386h-2.467l-.012 7.144h4.285a2.694 2.694 0 0 0 2.693-2.694V4.694A2.694 2.694 0 0 0 19.296 2z"
      />
    </svg>
  );
});
