import React, { createContext, useContext, useMemo } from "react";

interface AnchorProps {
  href: string;
  children?: React.ReactNode;
  as?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string;
  passHref?: boolean;
  className?: string;
  onClick?: (e?: MouseEvent) => void;
  style?: Record<string, string>;
  target?: string;
}

interface ShoppingConfig {
  shoppingURL: (path?: string) => string;
  imagesURL: (path?: string) => string;
  anchorComponent?: React.FC<AnchorProps> | string;
  footerAttencionService?: string;
  headerAttencionService?: string;
}

interface BaseURLProviderProps {
  shoppingURL: string;
  imagesURL: string;
  anchorComponent?: React.FC | string;
  footerAttencionService?: string;
  headerAttencionService?: string;
  children: React.ReactNode;
}

const BaseURLContext = createContext<ShoppingConfig>({
  shoppingURL: (path = "/") =>
    new URL(path, "https://www.fravega.com/").toString(),
  imagesURL: (path = "/") =>
    new URL(path, "https://images.fravega.com/").toString(),
});

export function ShoppingConfigProvider({
  shoppingURL,
  imagesURL,
  anchorComponent,
  footerAttencionService,
  headerAttencionService,
  children,
}: BaseURLProviderProps): JSX.Element {
  const config = useMemo(
    () => ({
      shoppingURL: (path = "/") => new URL(path, shoppingURL).toString(),
      imagesURL: (path = "/") => new URL(path, imagesURL).toString(),
      anchorComponent: anchorComponent ?? "a",
      footerAttencionService,
      headerAttencionService,
    }),
    [
      shoppingURL,
      imagesURL,
      anchorComponent,
      footerAttencionService,
      headerAttencionService,
    ],
  );

  return (
    <BaseURLContext.Provider value={config}>{children}</BaseURLContext.Provider>
  );
}

export default function useShoppingConfig(): ShoppingConfig {
  return useContext(BaseURLContext);
}

export function toShoppingAbsoluteURL(
  linkDescriptorHref: string,
  { shoppingURL, imagesURL }: ShoppingConfig,
): string {
  if (!linkDescriptorHref) return linkDescriptorHref;

  return linkDescriptorHref
    .replace(/{{shoppingURL}}\/?/g, shoppingURL())
    .replace(/{{imagesURL}}\/?/g, imagesURL());
}
