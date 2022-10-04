import { getRouterQueryFromListingFilteringVariables } from "helpers/useListing";
import querystring from "querystring";
import {
  MenuSection,
  LinkUnion,
  SubMenu,
} from "../header/categories-menu/types";

export default function linkAssigner(item: LinkUnion | MenuSection | SubMenu) {
  switch (item.type) {
    case "SubMenu":
      return linkAssigner(item.title);
    case "MenuSection":
      return linkAssigner(item.title);
    case "GenericLink":
      return item.href;
    case "GenericLink":
      return item.href;
    case "LandingLink":
      return item.context;
    case "ListingLink":
      const filtering = getRouterQueryFromListingFilteringVariables(
        item.filtering,
      );

      const filteringwithoutUndefinedAndCategories = Object.keys(
        filtering,
      ).reduce(
        (acc, curr) => {
          if (curr !== "categorias" && !!filtering[curr]) {
            acc[curr] = acc[curr]
              ? [...acc[curr], filtering[curr]]
              : filtering[curr];
          }
          return acc;
        },

        {},
      );

      const stringFilters = querystring.stringify(
        filteringwithoutUndefinedAndCategories,
      );

      if (filtering["categorias"]) {
        return `/l/${filtering["categorias"]?.join("/")}/?${stringFilters}`;
      } else {
        return `/l/?${stringFilters}`;
      }
    default:
      return null;
  }
}
