export default interface LinkDescriptor {
  target?: "_self" | "_blank";
  logo?: string;
  label: string;
  alt?: string;
  title?: string;
  href?: string;
  context?: string;
  appearance?: "button" | "anchor";
  modal?: {
    title?: string;
    subTitle?: string;
    label?: string;
  };
}
