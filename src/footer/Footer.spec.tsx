import "@testing-library/jest-dom";

import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Footer from "./Footer";

describe(Footer, () => {
  describe("links", () => {
    let screen: RenderResult;

    beforeEach(() => {
      screen = render(<Footer context={undefined} />);
    });

    test("displays service link", () => {
      expect(screen.getByText("Servicio técnico")).toBeInTheDocument();
      expect(screen.getByText("Servicio técnico").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/servicio-tecnico",
      );
    });
    test("displays legals link", () => {
      expect(screen.getByText("Información legal")).toBeInTheDocument();
      expect(
        screen.getByText("Información legal").closest("a"),
      ).toHaveAttribute("href", "https://www.fravega.com/e/legales");
    });
    test("displays 'Protección de Usuarios Financieros' link", () => {
      expect(
        screen.getByText("Protección de Usuarios Financieros"),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Protección de Usuarios Financieros").closest("a"),
      ).toHaveAttribute(
        "href",
        "https://www.fravega.com/e/usuarios-financieros/",
      );
    });
    test("displays help link", () => {
      expect(screen.getByText("Centro de ayuda")).toBeInTheDocument();
      expect(screen.getByText("Centro de ayuda").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/centro-de-ayuda",
      );
    });
    test("displays contact link", () => {
      expect(screen.getByText("Contactanos")).toBeInTheDocument();
      expect(screen.getByText("Contactanos").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/centro-de-ayuda/contacto",
      );
    });
    test.skip("displays faq link", () => {
      expect(screen.getByText("Preguntas Frecuentes")).toBeInTheDocument();
      expect(
        screen.getByText("Preguntas Frecuentes").closest("a"),
      ).toHaveAttribute("href", "https://www.fravega.com/centro-de-ayuda/faqs");
    });
    test("displays branches link", () => {
      expect(screen.getByText("Sucursales")).toBeInTheDocument();
      expect(screen.getByText("Sucursales").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/sucursales",
      );
    });
    test.skip("displays returns link", () => {
      expect(screen.getByText("Devoluciones")).toBeInTheDocument();
      expect(screen.getByText("Devoluciones").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/politica-devoluciones",
      );
    });
    test("displays smart tvs link", () => {
      expect(screen.getByText("Smart TV")).toBeInTheDocument();
      expect(screen.getByText("Smart TV").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/l/tv-y-video/tv/?smart-tv=si",
      );
    });
    test("displays phones link", () => {
      expect(screen.getByText("Celulares")).toBeInTheDocument();
      expect(screen.getByText("Celulares").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/l/celulares/",
      );
    });
    test("displays ac link", () => {
      expect(screen.getByText("Aire acondicionado")).toBeInTheDocument();
      expect(
        screen.getByText("Aire acondicionado").closest("a"),
      ).toHaveAttribute(
        "href",
        "https://www.fravega.com/l/climatizacion/aire-acondicionado/",
      );
    });
    test("displays news link", () => {
      expect(screen.getByText("Novedades")).toBeInTheDocument();
      expect(screen.getByText("Novedades").closest("a")).toHaveAttribute(
        "href",
        "https://www.fravega.com/e/novedades/",
      );
    });
  });
});
