import { useMemo } from "react";

import LinkDescriptor from "apollo/types/LinkDescriptor";

import useShoppingConfig, { toShoppingAbsoluteURL } from "./useShoppingConfig";

interface LinkSection {
  label: string;
  links: LinkDescriptor[];
}

export type FooterContext = "unknown" | "home" | "listing" | "product-details";

export default function useFooter(
  context: FooterContext = "unknown",
): [LinkSection[]] {
  const links: LinkSection[] = [
    {
      label: "Comprar en Fravega.com",
      links: [
        {
          href: "{{shoppingURL}}/servicio-tecnico",
          label: "Servicio técnico",
        },
        {
          href: "{{shoppingURL}}/e/legales",
          label: "Información legal",
        },
        {
          context: "home",
          href: "{{shoppingURL}}/mi-cuenta/mis-compras",
          label: "Botón de arrepentimiento",
        },
        {
          href: "{{shoppingURL}}/e/usuarios-financieros/",
          label: "Protección de Usuarios Financieros",
        },
      ],
    },
    {
      label: "Frávega Créditos",
      links: [
        {
          href: "https://creditos.fravega.com/",
          label: "Pagá Online",
        },
        // {
        //   href: "https://www.fravega.com/e/catalogo-credito/",
        //   label: "Catálogo exclusivo",
        // },
        {
          href: "{{shoppingURL}}/centro-de-ayuda/creditos/",
          label: "Condiciones",
        },
      ],
    },
    {
      label: "Recomendados",
      links: [
        {
          href: "{{shoppingURL}}/l/tv-y-video/tv/?smart-tv=si",
          label: "Smart TV",
        },
        { href: "{{shoppingURL}}/l/celulares/", label: "Celulares" },
        {
          href: "{{shoppingURL}}/l/climatizacion/aire-acondicionado/",
          label: "Aire acondicionado",
        },
        { href: "{{shoppingURL}}/e/novedades/", label: "Novedades" },
      ],
    },
    {
      label: "Ayuda",
      links: [
        {
          href: "{{shoppingURL}}/centro-de-ayuda",
          label: "Centro de ayuda",
        },
        {
          href: "{{shoppingURL}}/centro-de-ayuda/contacto",
          label: "Contactanos",
        },
        // { href: "{{shoppingURL}}/centro-de-ayuda/faqs", , label: "Preguntas Frecuentes", type: " },
        { href: "{{shoppingURL}}/sucursales", label: "Sucursales" },
        // { href: "{{shoppingURL}}/politica-devoluciones", , label: "Devoluciones", type: " },
        {
          href: "{{shoppingURL}}/vende-en-fravega",
          label: "Vendé en Frávega",
        },
        {
          href: "https://fravega.hiringroom.com/jobs",
          label: "Trabajá con nosotros",
        },
      ],
    },
    {
      label: "Beneficios",
      links: [
        {
          href: "{{shoppingURL}}/l/?promociones=club-personal",
          label: "Club Personal",
        },
        {
          href: "{{shoppingURL}}/l/?promociones=serviclub",
          label: "YPF",
        },
        {
          href: "{{shoppingURL}}/l/?promociones=promo-365",
          label: "365",
        },
        {
          href: "{{shoppingURL}}/l/?promociones=club-movistar",
          label: "Club Movistar",
        },
      ],
    },
  ];

  const shoppingConfig = useShoppingConfig();

  const configuredLinks = useMemo(
    () =>
      links.map((section) => ({
        ...section,
        links: section.links
          .map((linkDescriptor) => ({
            ...linkDescriptor,
            href: toShoppingAbsoluteURL(linkDescriptor.href, shoppingConfig),
          }))
          .filter((link) => !link.context || link.context === context),
      })),
    [],
  );

  return [configuredLinks];
}
