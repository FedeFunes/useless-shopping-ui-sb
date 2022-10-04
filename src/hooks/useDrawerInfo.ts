import { useMemo } from "react";

import LinkDescriptor from "apollo/types/LinkDescriptor";

import useShoppingConfig, { toShoppingAbsoluteURL } from "./useShoppingConfig";

export default function useDrawerInfo(): [LinkDescriptor[]] {
  const links: LinkDescriptor[] = [
    {
      logo: "/static/svg/icon-chat-bubble-outlined.svg",
      alt: "centro de ayuda",
      label: "Centro de ayuda",
      href: "{{shoppingURL}}/centro-de-ayuda",
    },
    {
      logo: "/static/svg/branch-store-outlined.svg",
      alt: "sucursales",
      label: "Sucursales",
      href: "{{shoppingURL}}/sucursales",
    },
    {
      logo: "/static/svg/icon-wrench-outlined.svg",
      alt: "servicio técnico",
      label: "Servicio técnico",
      href: "{{shoppingURL}}/servicio-tecnico",
    },
  ];

  const shoppingConfig = useShoppingConfig();

  const configuredLinks = useMemo(
    () =>
      links.map((linkDescriptor) => ({
        ...linkDescriptor,
        href: toShoppingAbsoluteURL(linkDescriptor.href, shoppingConfig),
      })),
    [],
  );

  return [configuredLinks];
}
