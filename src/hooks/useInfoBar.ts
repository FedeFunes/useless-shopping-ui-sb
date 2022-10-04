import { useMemo } from "react";

import LinkDescriptor from "apollo/types/LinkDescriptor";

import useShoppingConfig, { toShoppingAbsoluteURL } from "./useShoppingConfig";

export default function useInfoBar(): [LinkDescriptor[], LinkDescriptor[]] {
  const shoppingConfig = useShoppingConfig();

  const leftLinks: LinkDescriptor[] = [
    {
      logo: "/static/svg/fast-truck.svg",
      label: "Seguí tu compra",
      alt: "Seguí tu compra",
      title: "",
      href: "{{shoppingURL}}/mi-cuenta/mis-compras",
    },
    {
      logo: "/static/svg/cog.svg",
      label: "Servicio técnico",
      alt: "Servicio técnico",
      title: "",
      href: "{{shoppingURL}}/servicio-tecnico",
    },
    {
      logo: "/static/svg/branch-store-filled.svg",
      label: "Sucursales",
      alt: "Sucursales",
      title: "",
      href: "{{shoppingURL}}/sucursales",
    },
    {
      logo: "/static/svg/ringing-phone.svg",
      label: "Venta telefónica",
      alt: "Venta telefónica",
      title: "",
      modal: {
        title: "Venta telefónica",
        subTitle: "0810 333 8700",
        label: shoppingConfig.headerAttencionService
          ? shoppingConfig.headerAttencionService
          : "Lunes y Viernes de 8:00 a 20:00 - Sábados, Domingos y Feriados de 9:00 a 21:00",
      },
    },
    {
      logo: "/static/svg/icon-chat-bubble.svg",
      label: "Centro de ayuda",
      alt: "Centro de ayuda",
      title: "",
      href: "{{shoppingURL}}/centro-de-ayuda",
    },
  ];
  const rightLinks: LinkDescriptor[] = [
    {
      logo: "/static/svg/fravega-credits.svg",
      title: "Frávega creditos",
      label: "",
      alt: "Frávega creditos",
      href: "https://creditos.fravega.com/",
      target: "_blank",
    },
  ];

  const configuredLeftLinks = useMemo(
    () =>
      leftLinks.map((linkDescriptor) => ({
        ...linkDescriptor,
        href: toShoppingAbsoluteURL(linkDescriptor.href, shoppingConfig),
      })),
    [],
  );

  const configuredRightLinks = useMemo(
    () =>
      rightLinks.map((linkDescriptor) => ({
        ...linkDescriptor,
        href: toShoppingAbsoluteURL(linkDescriptor.href, shoppingConfig),
      })),
    [],
  );

  return [configuredLeftLinks, configuredRightLinks];
}
