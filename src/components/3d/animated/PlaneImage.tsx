import {
    useAnimationElement
} from "../../../animation/useAnimationElement";

import TexturePlane from "../basic/TexturePlane";

interface PlaneImageProps {
    image: string;
    width?: number;
    height?: number;
    scale?: number | [number, number, number];
}


export function PlaneImage({
    image,
    width,
    height,
    scale = 1,
}: PlaneImageProps) {

    const { progress } = useAnimationElement();

    return (
        <TexturePlane
            texture={image}
            width={width}
            height={height}
            scale={scale}
            rotation={[
                0,
                Math.sin(
                    progress *
                    Math.PI *
                    2
                ) * 0.3,
                0,
            ]}
        />
    );

}