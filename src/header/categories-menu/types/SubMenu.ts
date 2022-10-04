import MenuItem from "./MenuItem";
import Section from "./MenuSection";
import LinkUnion from "./LinkUnion";

export default interface SubMenu extends MenuItem {
  type: "SubMenu";
  title?: LinkUnion;
  isOpenMobile?: boolean;
  sections: Section[];
}
