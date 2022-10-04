import React, { forwardRef } from "react";

export default forwardRef(function IconBranchStore(
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
        d="M6.594 12.33l.049.058c.695.804 1.684 1.314 2.716 1.399 1.012.083 2-.23 2.778-.888l.055-.046.054.046c.784.662 1.77.973 2.784.887 1.027-.085 2.014-.594 2.708-1.395l.05-.059.063.044c.555.385 1.172.578 1.802.547l.088.643-.001 6.864-.014-.63-.001.128h-5.516l.001-3.585c0-.262-.225-.475-.504-.475l-3.053.01c-.228.043-.399.239-.399.465v3.585H5.36c-.29 0-.565-.027-.717.479v-6.845l.088-.642.108.002c.583 0 1.165-.189 1.691-.549l.064-.042zM19.41 5.76c.172 0 .327.097.403.252l1.516 3.046.046.143.007.276c0 .335-.062.656-.169.956-.2.478-.533.93-.975 1.113-.73.302-1.546.103-2.184-.534l-.01-.01c-.11-.106-.254-.156-.398-.134-.155.018-.29.102-.371.233-.53.847-1.381 1.376-2.336 1.453-.908.072-1.769-.284-2.372-.972-.19-.218-.561-.22-.753 0-.552.631-1.32.982-2.135.982-.076 0-.154-.003-.231-.01-.958-.076-1.811-.606-2.342-1.453-.081-.131-.216-.216-.37-.234-.15-.019-.3.035-.406.142l-.083.08c-.634.586-1.433.75-2.138.439-.467-.205-.804-.712-.99-1.222-.067-.225-.108-.463-.118-.71L3 9.265l.004-.05c.007-.037.014-.062.02-.084l.005-.016 1.54-3.104c.076-.155.23-.252.403-.252z"
        transform="translate(-344 -3) translate(44 3) translate(300)"
      />
    </svg>
  );
});
