import { FooterContext } from "hooks/useFooter";
import React from "react";

import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    context: {
      defaultValue: "home",
      control: {
        type: "select",
        options: ["unknown", "home", "listing", "product-details"],
      },
    },
  },
};

interface FooterStoriesProps {
  context: FooterContext;
}

export const Default = ({ context }: FooterStoriesProps): React.ReactNode => (
  <Footer context={context} />
);
