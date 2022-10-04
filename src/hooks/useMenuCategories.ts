import { useQuery } from "@apollo/client";
import menuCategoriesQuery from "apollo/queries/menuCategoriesQuery";
import { SubMenu } from "header/categories-menu/types";
export interface MenuCategory {
  id: string;
  createdTime?: string;
  fields: {
    name?: string;
    href?: string;
    parent_category?: string[];
    view_more?: boolean;
    column?: number;
    order?: number;
    children?: MenuCategory[];
  };
}

interface Result {
  categoryMenu: SubMenu;
  loading: boolean;
}

interface DataResult {
  categoryMenu: SubMenu;
}

export default function useMenuCategories(): Result {
  const { data, loading } = useQuery<DataResult>(menuCategoriesQuery, {
    variables: { postalCode: "" },
  });
  return {
    categoryMenu: data?.categoryMenu,
    loading,
  };
}

export function categoriesColumnOrderComparator(
  a: MenuCategory,
  b: MenuCategory,
): number {
  return a.fields.column - b.fields.column || a.fields.order - b.fields.order;
}
