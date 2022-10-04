import React from "react";

import useShoppingConfig from "hooks/useShoppingConfig";

interface Props {
  format: string;
  title: string;
  imageId: string;
  width: string;
}

export default function ImageShopping({
  format,
  imageId,
  title,
  width,
}: Props): JSX.Element {
  const { imagesURL } = useShoppingConfig();
  const src = imagesURL(`/${format}/${imageId}`);

  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={src} alt={title} width={width} />
    </picture>
  );
}
