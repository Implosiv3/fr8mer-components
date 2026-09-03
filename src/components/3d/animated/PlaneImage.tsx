/*
  A plain image that is rotating and using an
  existing image for the texture.
*/

import { useAnimationElement } from "@implosiv3/fr8mer-components";

import TexturePlane from "../basic/TexturePlane";


interface PlaneImageProps {
  image: string;
}


export function PlaneImage({
  image,
}: PlaneImageProps) {

  const { progress } = useAnimationElement();

  return (
    <TexturePlane
      texture={image}
      width={4 * 1}
      height={1 * 1}
      rotation={[
        0,
        Math.sin(progress * Math.PI * 2) * 0.3,
        0,
      ]}
    />
  );

}