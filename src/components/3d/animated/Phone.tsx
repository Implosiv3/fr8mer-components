/*
A phone model in which we have the outside
and a screen.
*/
import { RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useAnimationElement } from "../../../animation/useAnimationElement";


export function Phone() {
  const { progress } = useAnimationElement()
  const t = progress * Math.PI * 2;
  const screenTexture = useTexture("/Mario.webp");

  const screenW = 1.75;
  const screenH = 3.75;

  const imgW = screenTexture.image.width;
  const imgH = screenTexture.image.height;

  const scale = Math.min(
    screenW / imgW,
    screenH / imgH
  );

  const width = imgW * scale;
  const height = imgH * scale;

  return (
    <group
      rotation={[
        // THREE.MathUtils.degToRad(-20),
        0,
        THREE.MathUtils.degToRad(35) + Math.sin(t) * 0.2,
        0,
      ]}
    >
      <RoundedBox
        args={[2, 4, 0.15]}
        radius={0.15}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* This is just a solid color for the screen */}
      {/* <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.75, 3.75]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={0.15}
        />
      </mesh> */}

      {/* Pantalla */}
      <mesh position={[0, 0, 0.081]}>
        <planeGeometry args={[width, height]} />

        <meshStandardMaterial
          map={screenTexture}
          emissiveMap={screenTexture}
          emissive="white"
          emissiveIntensity={0.15}
          transparent
        />
      </mesh>

      {/* This image is occupying the whole screen, distorted */}
      {/* <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[1.75, 3.75]} />
        <meshStandardMaterial
          map={screenTexture}
          emissiveMap={screenTexture}
          emissive="white"
          emissiveIntensity={0.15}
        />
      </mesh> */}

      <mesh position={[0, 1.75, 0.09]}>
        <boxGeometry args={[0.4, 0.08, 0.02]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}