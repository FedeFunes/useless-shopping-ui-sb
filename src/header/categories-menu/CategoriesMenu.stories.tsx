import React from "react";

import CategoriesMenu from "./CategoriesMenu";

export default {
  title: "CategoriesMenu",
  component: CategoriesMenu,
  layout: "fullscreen",
};

export const Default = (): React.ReactNode => (
  <>
    <CategoriesMenu />
  </>
);
