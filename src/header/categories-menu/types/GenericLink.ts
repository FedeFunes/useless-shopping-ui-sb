import Link from "./Link";

export default interface GenericLink extends Link {
  type: "GenericLink";
  href: string;
}
