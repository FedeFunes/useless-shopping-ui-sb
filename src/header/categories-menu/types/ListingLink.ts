import ItemFilteringInputType from "./ItemFilteringInputType";
import Link from "./Link";

export default interface ListingLink extends Link {
  type: "ListingLink";
  filtering: ItemFilteringInputType;
}
