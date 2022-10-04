import Link from "./Link";

export default interface ListingLink extends Link {
  type: "ModalLink";
  label: string;
  h1?: string;
  h2?: string;
  h5?: string;
}
