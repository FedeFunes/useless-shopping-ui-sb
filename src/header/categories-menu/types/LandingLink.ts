import Link from "./Link";

type LandingContext = string;
export default interface LandingLink extends Link {
  type: "LandingLink";
  context: LandingContext;
}
