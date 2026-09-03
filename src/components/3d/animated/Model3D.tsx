import { useAnimationElement } from "../../../animation/useAnimationElement";
import {
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";


interface Model3DProps {
  model: string;
}


function applyMaterials(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#B8B8B8",
        metalness: 0.1,
        roughness: 0.7,
      });

      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}


function FBXModel({
  modelPath,
  progress,
}: {
  modelPath: string;
  progress: number;
}) {
  const model = useFBX(modelPath);

  useEffect(() => {
    applyMaterials(model);
  }, [model]);

  return (
    <primitive
      object={model}
      scale={3}
      rotation={[
        0,
        progress * Math.PI * 2,
        0,
      ]}
    />
  );
}


function GLTFModel({
  modelPath,
  progress,
}: {
  modelPath: string;
  progress: number;
}) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    applyMaterials(scene);
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={3}
      rotation={[
        0,
        progress * Math.PI * 2,
        0,
      ]}
    />
  );
}


export function Model3D({
  model,
}: Model3DProps) {
  const { progress } = useAnimationElement();

  const extension = model
    .split("?")[0]
    .split(".")
    .pop()
    ?.toLowerCase();

  if (extension === "fbx") {
    return (
      <FBXModel
        modelPath={model}
        progress={progress}
      />
    );
  }

  if (extension === "gltf" || extension === "glb") {
    return (
      <GLTFModel
        modelPath={model}
        progress={progress}
      />
    );
  }

  throw new Error(
    `Unsupported 3D model format: .${extension ?? "unknown"}`
  );
}