import React from "react";

import Footer from "footer";
import Header from "./Header";
import { FeaturesProvider } from "hooks/useFeature";

export default {
  title: "Header",
  component: Header,
  layout: "fullscreen",
  argTypes: {
    searchSuggestions: {
      defaultValue: "fravega",
      control: {
        type: "select",
        options: ["vtex", "fravega"],
      },
    },
  },
};

type SearchSuggestionsOptions = "vtex" | "fravega";

interface StoryProps {
  searchSuggestions: SearchSuggestionsOptions;
}

export const Default = ({ searchSuggestions }: StoryProps): React.ReactNode => (
  <FeaturesProvider
    features={(prevFeatures) => ({
      ...prevFeatures,
      fravegaSearchSuggestions: searchSuggestions === "fravega",
    })}
  >
    <Header />
  </FeaturesProvider>
);

export const WithFooter = ({
  searchSuggestions,
}: StoryProps): React.ReactNode => (
  <FeaturesProvider
    features={(prevFeatures) => ({
      ...prevFeatures,
      fravegaSearchSuggestions: searchSuggestions === "fravega",
    })}
  >
    <Header />
    <main
      style={{
        border: "1px solid #666",
        margin: "1rem auto",
        maxWidth: "1280px",
        minHeight: "400px",
      }}
    >
      <h1>Example content</h1>
    </main>
    <Footer />
  </FeaturesProvider>
);
