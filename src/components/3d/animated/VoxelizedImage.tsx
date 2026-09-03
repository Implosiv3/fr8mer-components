import { useRef } from "react";
import * as THREE from "three";

import { useAnimationElement } from "../../../animation/useAnimationElement";
import { VoxelSprite } from "../basic/VoxelSprite";

interface VoxelizedImageProps {
  image: string;
}

export function VoxelizedImage({
  image,
}: VoxelizedImageProps) {
  const ref = useRef<THREE.Group>(null);

  const { progress } = useAnimationElement();

  return (
    <group
      ref={ref}
      rotation={[
        0,
        0.6 + 6.0 * progress,
        0,
      ]}
    >
      <VoxelSprite
        imageUrl={image}
        voxelSize={0.01}
        depth={15}
      />
    </group>
  );
}