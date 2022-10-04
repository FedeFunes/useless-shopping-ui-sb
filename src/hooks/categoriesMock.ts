import { SubMenu } from "header/categories-menu/types";

export const mock: SubMenu = {
  type: "SubMenu",
  order: 0,
  column: 0,
  label: "",
  sections: [
    {
      type: "MenuSection",
      order: 0,
      column: 0,
      label: "",
      items: [
        {
          type: "SubMenu",
          order: 0,
          column: 0,
          label: "Categorías",
          isOpenMobile: true,
          sections: [
            {
              type: "MenuSection",
              order: 0,
              column: 0,
              label: "",
              items: [
                {
                  type: "SubMenu",
                  order: 0,
                  column: 0,
                  label: "TV, Audio y Video",
                  title: {
                    type: "GenericLink",
                    label: "TV, Audio y Video",
                    order: 0,
                    column: 0,
                    href: "https://fravega.com/categorias/tv-audio-video/",
                    logo: {
                      label: "Compra Samsung",
                      href: "/tienda-samsung",
                      logo: "",
                    },
                  },
                  sections: [
                    {
                      type: "MenuSection",
                      order: 0,
                      column: 0,
                      label: "Tv por tipo",
                      title: {
                        type: "ListingLink",
                        label: "Tv por tipo",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: "Full HD",
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tipo-de-resolucion",
                                  values: ["full-hd"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: "TV 4k",
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tipo-de-resolucion",
                                  values: ["4k-uhd"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: "TV 4k",
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "smart-tv",
                                  values: ["si"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "SubMenu",
                  order: 0,
                  column: 0,
                  label: "Celulares, Notebooks y Tecnologia",
                  title: {
                    type: "GenericLink",
                    label: "Celulares, Notebooks y Tecnologia",
                    order: 0,
                    column: 0,
                    href:
                      "https://www.fravega.com/categorias/tecnologia-celulares",
                    logo: {
                      label: "Compra Samsung",
                      href: "/tienda-samsung",
                      logo: "",
                    },
                  },
                  sections: [
                    {
                      type: "MenuSection",
                      order: 0,
                      column: 0,
                      label: "Celulares",
                      title: {
                        type: "ListingLink",
                        label: "Celulares",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["celulares"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: "Celulares Liberados",
                          filtering: {
                            categories: ["celulares/celulares-liberados"],
                            attributes: {
                              values: [
                                {
                                  key: "tipo-de-resolucion",
                                  values: ["full-hd"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: "Cargadores portatiles",
                          filtering: {
                            categories: [
                              "celulares/accesorios-para-celulares/cargadores/cargadores-portatiles/",
                            ],
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: "Accesorios para celulares",
                          filtering: {
                            categories: [
                              "celulares/accesorios-para-celulares/",
                            ],
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: "MenuSection",
                      label: "TV por pulgadas",
                      order: 0,
                      column: 1,
                      title: {
                        type: "ListingLink",
                        label: "TV por pulgadas",
                        order: 0,
                        column: 0,
                        filtering: {
                          categories: ["tv-y-video/tv"],
                        },
                      },
                      items: [
                        {
                          order: 0,
                          column: 0,
                          type: "ListingLink",
                          label: 'Menos de 32" ',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: ["32-pulgadas", "24-pulgadas"],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 1,
                          column: 0,
                          type: "ListingLink",
                          label: '32" a 43"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "32-pulgadas",
                                    "40-pulgadas",
                                    "43-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 2,
                          column: 0,
                          type: "ListingLink",
                          label: '49" a 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "50-pulgadas",
                                    "55-pulgadas",
                                    "65-pulgadas",
                                    "58-pulgadas",
                                    "60-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                        {
                          order: 3,
                          column: 0,
                          type: "ListingLink",
                          label: 'Mas de 65"',
                          filtering: {
                            categories: ["tv-y-video/tv"],
                            attributes: {
                              values: [
                                {
                                  key: "tamano-de-pantalla",
                                  values: [
                                    "70-pulgadas",
                                    "72-pulgadas",
                                    "80-pulgadas",
                                  ],
                                },
                              ],
                              ranges: [],
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "MenuSection",
              order: 0,
              column: 0,
              label: "",
              items: [
                {
                  type: "GenericLink",
                  href: "/tienda-samsung",
                  order: 0,
                  column: 0,
                  label: "Tienda Samsung",
                },
              ],
            },
          ],
        },
        {
          href: "/hot-sale",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Hot Sale",
        },
        {
          href: "/dia-del-padre",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Día del padre",
        },
        {
          href: "/tienda-samsung",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Tienda Samsung",
        },
      ],
    },
    {
      type: "MenuSection",
      order: 0,
      column: 1,
      label: "",
      items: [
        {
          href: "/sucursales",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Sucursales",
        },
        {
          href: "/segui-tu-compra",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Segui tu compra",
        },
        {
          href: "/centro-de-ayuda",
          order: 0,
          column: 0,
          type: "GenericLink",
          label: "Centro de ayuda",
        },
        {
          type: "ModalLink",
          order: 0,
          column: 0,
          label: "Venta telefonica",
          h1: "Venta telefonica",
          h2: "0810 333 8700",
          h5:
            "Lunes y Viernes de 8:00 a 20:00 - Sábados, Domingos y Feriados de 9:00 a 21:00",
        },
        {
          type: "GenericLink",
          href: "/fravega-creditos",
          order: 0,
          column: 1,
          label: "Fravega Creditos",
        },
      ],
    },
  ],
};
