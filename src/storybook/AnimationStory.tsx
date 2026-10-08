import {
    useCallback,
    useEffect,
    useState,
    type ChangeEvent,
    type ReactNode,
} from "react";

import {
    AnimationProvider,
} from "../animation/AnimationProvider";

import {
    AnimationElementProvider,
} from "../animation/AnimationElementProvider";

import type {
    AnimationState,
    AnimationElementState,
} from "../animation/types";

import "./AnimationStory.css";


interface AnimationStoryProps {
    children: ReactNode;

    fps?: number;

    totalFrames?: number;
}


export function AnimationStory({
    children,
    fps = 60,
    totalFrames = 300,
}: AnimationStoryProps) {
    const [frame, setFrame] = useState(0);
    const [playing, setPlaying] = useState(false);

    const time = frame / fps;

    const progress =
        totalFrames > 0
            ? Math.min(frame / totalFrames, 1)
            : 0;

    const animation: AnimationState = {
        frame,
        fps,
        time,
    };

    const animationElement: AnimationElementState = {
        frame,
        time,
        progress,
    };


    const reset = useCallback(() => {
        setPlaying(false);
        setFrame(0);
    }, []);


    useEffect(() => {
        if (!playing) {
            return;
        }

        let animationFrameId: number;
        let previousTimestamp: number | null = null;
        let accumulatedFrames = frame;

        const animate = (timestamp: number) => {
            if (previousTimestamp === null) {
                previousTimestamp = timestamp;
            }

            const elapsedMilliseconds =
                timestamp - previousTimestamp;

            const framesToAdvance =
                elapsedMilliseconds / 1000 * fps;

            accumulatedFrames += framesToAdvance;

            const nextFrame = Math.floor(accumulatedFrames);

            previousTimestamp = timestamp;

            if (nextFrame >= totalFrames) {
                setFrame(totalFrames);
                setPlaying(false);

                return;
            }

            setFrame(nextFrame);

            animationFrameId =
                requestAnimationFrame(animate);
        };

        animationFrameId =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        playing,
        fps,
        totalFrames,
        frame,
    ]);


    const handlePlayPause = () => {
        if (playing) {
            setPlaying(false);

            return;
        }

        if (frame >= totalFrames) {
            setFrame(0);
        }

        setPlaying(true);
    };


    const handleFrameChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setPlaying(false);
        setFrame(Number(event.target.value));
    };


    return (
        <div className="animation-story">
            <div className="animation-story__preview">
                <AnimationProvider value={animation}>
                    <AnimationElementProvider
                        value={animationElement}
                    >
                        {children}
                    </AnimationElementProvider>
                </AnimationProvider>
            </div>

            <div className="animation-story__controls">
                <div className="animation-story__buttons">
                    <button
                        type="button"
                        onClick={handlePlayPause}
                    >
                        {playing ? "Pause" : "Play"}
                    </button>

                    <button
                        type="button"
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>

                <div className="animation-story__timeline">
                    <input
                        type="range"
                        min={0}
                        max={totalFrames}
                        step={1}
                        value={frame}
                        onChange={handleFrameChange}
                    />

                    <div className="animation-story__frame-info">
                        <span>
                            Frame {frame} / {totalFrames}
                        </span>

                        <span>
                            {time.toFixed(3)}s
                        </span>
                    </div>
                </div>

                <div className="animation-story__info">
                    <span>
                        Progress: {(progress * 100).toFixed(1)}%
                    </span>

                    <span>
                        FPS: {fps}
                    </span>

                    <span>
                        Duration: {(totalFrames / fps).toFixed(2)}s
                    </span>
                </div>
            </div>
        </div>
    );
}