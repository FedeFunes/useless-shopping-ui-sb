import React, { useState, useCallback } from "react";

import Drawer, { DrawerCloseButton, DrawerHr, DrawerSection } from "./Drawer";

export const Default: React.FC = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);
  return (
    <div>
      <button onClick={openDrawer}>Click to open </button>
      <Drawer open={open} onClose={closeDrawer}>
        <DrawerSection>
          Drawer Content. <b>Click outside to close</b>
        </DrawerSection>
        <DrawerHr />
        <DrawerSection>
          <button>Do nothing</button>
          <button onClick={closeDrawer}>Close</button>
        </DrawerSection>
        <DrawerCloseButton />
      </Drawer>
    </div>
  );
};

export default {
  title: "Drawer",
  component: Drawer,
};
