import React from "react";

import { DrawerLi, DrawerUl } from "common/Drawer";

import useDrawerInfo from "hooks/useDrawerInfo";

import InfoBarLink from "./InfoBarLink";

export default function DrawerInfo(): JSX.Element {
  const [links] = useDrawerInfo();

  return (
    <DrawerUl>
      {links.map((linkDescriptor) => (
        <DrawerLi key={linkDescriptor.href}>
          <InfoBarLink linkDescriptor={linkDescriptor} />
        </DrawerLi>
      ))}
    </DrawerUl>
  );
}
