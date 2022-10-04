import React from "react";

import { ShoppingContextProvider } from "shopping-context";

export const decorators = [
  (Story) => (
    <ShoppingContextProvider
      shoppingURL="https://shopping.development.fravega.com/"
      imagesURL="https://images2.development.fravega.com/"
      // featuresFravegaSearchSuggestions turn on to new item-search
    >
      <Story />
    </ShoppingContextProvider>),
];

export const parameters = {
  layout: 'fullscreen',
};
