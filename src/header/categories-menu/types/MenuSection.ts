import LinkUnion from "./LinkUnion";
import MenuItem from "./MenuItem";
import MenuItemUnion from "./MenuItemUnion";

export default interface MenuSection extends MenuItem {
  type: "MenuSection";
  title?: LinkUnion;
  items: MenuItemUnion[];
}
