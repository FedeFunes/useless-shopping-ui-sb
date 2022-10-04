import React, { createContext, useContext } from "react";

export type FeatureFlags = {
  fravegaSearchSuggestions: boolean;
};

const FeaturesContext = createContext<FeatureFlags>({
  fravegaSearchSuggestions: false,
});

interface FeaturesProviderProps {
  children: unknown;
  features: FeatureFlags | ((prevFeatures: FeatureFlags) => FeatureFlags);
}

export function FeaturesProvider({
  children,
  features,
}: FeaturesProviderProps): JSX.Element {
  const prevFeatures = useContext(FeaturesContext);

  const newFeatures =
    typeof features === "function" ? features(prevFeatures) : features;

  return (
    <FeaturesContext.Provider value={newFeatures}>
      {children}
    </FeaturesContext.Provider>
  );
}

export default function useFeature(id: keyof FeatureFlags): [boolean] {
  const features = useContext(FeaturesContext);
  return [features[id]];
}
