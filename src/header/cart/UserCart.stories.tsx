import React from "react";

import UserCart from "./UserCart";

export default {
  title: "UserCart",
  component: UserCart,
  layout: "fullscreen",
};

export const Default = (): React.ReactNode => (
  <>
    <UserCart />
  </>
);
