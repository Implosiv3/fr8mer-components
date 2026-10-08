import {
    useEffect,
    useMemo
} from "react";

import {
    useThree,
    type ThreeElements
} from "@react-three/fiber";

import {
    useTexture
} from "@react-three/drei";

import * as THREE from "three";


type TexturePlaneProps =
    ThreeElements["mesh"] & {

        texture: string;

        /**
         * Width of the plane in Three.js units.
         *
         * If omitted, the size is calculated from
         * the source image aspect ratio.
         */
        width?: number;

        /**
         * Height of the plane in Three.js units.
         *
         * If omitted, the size is calculated from
         * the source image aspect ratio.
         */
        height?: number;

        /**
         * Additional scale applied to the final
         * calculated dimensions.
         *
         * Can be a number or a Three.js Vector3-like
         * tuple.
         */
        scale?: number | [number, number, number];
    };


export default function TexturePlane({
    texture: textureUrl,

    width,
    height,

    scale = 1,

    ...meshProps

}: TexturePlaneProps) {

    const texture =
        useTexture(
            textureUrl
        );


    const {
        gl
    } =
        useThree();


    useEffect(() => {

        texture.colorSpace =
            THREE.SRGBColorSpace;

        texture.anisotropy =
            gl.capabilities.getMaxAnisotropy();

        texture.generateMipmaps =
            true;

        texture.needsUpdate =
            true;

    }, [
        texture,
        gl
    ]);


    const dimensions =
        useMemo(() => {

            const image =
                texture.image;


            if (!image) {

                return {
                    width:
                        width ?? 1,

                    height:
                        height ?? 1
                };

            }


            const imageWidth =
                image.width;

            const imageHeight =
                image.height;


            if (
                !imageWidth ||
                !imageHeight
            ) {

                return {
                    width:
                        width ?? 1,

                    height:
                        height ?? 1
                };

            }


            const aspectRatio =
                imageWidth /
                imageHeight;


            /*
             * Both dimensions specified.
             *
             * Use them exactly.
             */

            if (
                width !== undefined &&
                height !== undefined
            ) {

                return {
                    width,
                    height
                };

            }


            /*
             * Width specified.
             *
             * Calculate height from
             * the source image ratio.
             */

            if (
                width !== undefined
            ) {

                return {
                    width,

                    height:
                        width /
                        aspectRatio
                };

            }


            /*
             * Height specified.
             *
             * Calculate width from
             * the source image ratio.
             */

            if (
                height !== undefined
            ) {

                return {
                    width:
                        height *
                        aspectRatio,

                    height
                };

            }


            /*
             * Nothing specified.
             *
             * Default to width = 1 and
             * calculate height from
             * the source image ratio.
             */

            return {
                width: 1,

                height:
                    1 /
                    aspectRatio
            };

        }, [
            texture,
            width,
            height
        ]);


    return (
        <mesh
            {...meshProps}

            scale={
                scale
            }
        >

            <planeGeometry
                args={[
                    dimensions.width,
                    dimensions.height
                ]}
            />


            <meshBasicMaterial
                map={texture}
                transparent
                opacity={1}
                alphaTest={0.1}
                side={THREE.DoubleSide}
            />

        </mesh>
    );
}