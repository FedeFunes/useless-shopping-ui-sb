import GenericLink from "./GenericLink";
import LandingLink from "./LandingLink";
import ListingLink from "./ListingLink";
import SimpleText from "./SimpleText";
import ModalLink from "./ModalLink";

type LinkUnion =
  | SimpleText
  | GenericLink
  | ListingLink
  | LandingLink
  | ModalLink;

export default LinkUnion;
