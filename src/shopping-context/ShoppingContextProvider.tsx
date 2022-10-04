import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import baseStyle from "common/baseStyle";

import { RouterContextProvider } from "hooks/useContextRouter";
import { TrackingProvider } from "hooks/useTracking";
import type { TrackingFunction } from "hooks/useTracking";
import { ShoppingConfigProvider } from "hooks/useShoppingConfig";
import { ShoppingGeoProvider } from "hooks/useShoppingGeoLocation";
import { FeatureFlags, FeaturesProvider } from "hooks/useFeature";
import { GeoModalProvider } from "hooks/useGeoModal";
import { GeoTooltipProvider } from "hooks/useGeoTooltip";

import { ShoppingGeoLocation } from "lib/shoppingGeoLocation";

interface Props {
  apolloClient?: ApolloClient<unknown>;
  shoppingURL?: string;
  footerAttencionService?: string;
  headerAttencionService?: string;
  imagesURL?: string;
  featuresFravegaSearchSuggestions?: boolean;
  initialGeoLocation?: ShoppingGeoLocation;
  track?: TrackingFunction;
  router?: { push: (href: string) => void };
  anchorComponent?: React.FC;
  children: ReactNode;
}

const DefaultStyles = styled.div`
  ${baseStyle}
  display: contents;
`;

function createApolloClient(shoppingApiURL) {
  return new ApolloClient({
    uri: shoppingApiURL,
    cache: new InMemoryCache(),
  });
}

export default function ShoppingContextProvider({
  apolloClient,
  shoppingURL = "https://www.fravega.com/",
  imagesURL = "https://images.fravega.com/",
  featuresFravegaSearchSuggestions = false,
  initialGeoLocation,
  track,
  router,
  anchorComponent,
  footerAttencionService,
  headerAttencionService,
  children,
}: Props): JSX.Element {
  const shoppingApiURL = new URL("/api/v1", shoppingURL).toString();

  const _apolloClient = useMemo(
    () => apolloClient ?? createApolloClient(shoppingApiURL),
    [apolloClient, shoppingApiURL],
  );

  const features: FeatureFlags = useMemo(
    () => ({
      fravegaSearchSuggestions: featuresFravegaSearchSuggestions,
    }),
    [featuresFravegaSearchSuggestions],
  );

  return (
    <ApolloProvider client={_apolloClient}>
      <TrackingProvider track={track}>
        <RouterContextProvider router={router}>
          <div id="modal"> </div>
          <ShoppingConfigProvider
            anchorComponent={anchorComponent}
            shoppingURL={shoppingURL}
            imagesURL={imagesURL}
            footerAttencionService={footerAttencionService}
            headerAttencionService={headerAttencionService}
          >
            <GeoTooltipProvider>
              <ShoppingGeoProvider initialGeoLocation={initialGeoLocation}>
                <GeoModalProvider>
                  <FeaturesProvider features={features}>
                    <DefaultStyles>{children}</DefaultStyles>
                  </FeaturesProvider>
                </GeoModalProvider>
              </ShoppingGeoProvider>
            </GeoTooltipProvider>
          </ShoppingConfigProvider>
        </RouterContextProvider>
      </TrackingProvider>
    </ApolloProvider>
  );
}
