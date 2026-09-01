import { useAnimation } from "../../../../animation/useAnimation";
import { useAnimationElement } from "../../../../animation/useAnimationElement";
import "./SimpleProgressBar.css";

type Props = {
    stripesSpeed: number;
};

export function SimpleProgressBar({
    stripesSpeed = 1,
}: Props) {
    const { frame } = useAnimation();
    const { progress } = useAnimationElement();
    const stripesOffset = -(frame * stripesSpeed);

    return (
        <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{
                    clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
                }}
            >
                <div
                    className="progress-bar__stripes"
                    style={{
                        transform: `translateX(${stripesOffset}px)`,
                    }}
                />
            </div>
        </div>
    );
}