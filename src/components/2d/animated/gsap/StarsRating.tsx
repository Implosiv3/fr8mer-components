/*
This module has been inspired by:
- https://codepen.io/aaroniker/pen/zYrzogx
*/
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAnimationElement } from "../../../../animation/useAnimationElement";

interface StarsRatingProps {
    rating: 1 | 2 | 3 | 4 | 5;
}

export function StarsRating({
    rating = 5
}: StarsRatingProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const stars = useRef<HTMLDivElement[]>([]);
    const { progress } = useAnimationElement();

    const starArray = useMemo(
        () => Array.from({ length: 5 }),
        []
    );

    useGSAP(() => {
        stars.current.forEach(star => {
            gsap.set(star, {
                "--star-scale": 0,
                "--dot-scale": 0.8,
                "--color": "#8A91B4"
            });
        });

        tl.current = gsap.timeline({
            paused: true
        });

        // The delay from one start to the next one
        const stagger = 0.2;
        // The time the start lasts to appear
        const duration = 0.4;

        const totalDuration = (rating - 1) * stagger + duration;

        for (let i = 0; i < rating; i++) {
            const star = stars.current[i];

            tl.current.to(
                star,
                {
                    "--star-scale": 1,
                    "--dot-scale": 0,
                    "--color": "#FDCF10",
                    duration: duration / totalDuration,
                    // ease: "elastic.out(1, .7)"
                },
                (i * stagger) / totalDuration
            );
        }
    }, {
        scope: rootRef,
        dependencies: [rating]
    });

    useEffect(() => {
        tl.current?.progress(progress);
    }, [progress]);

    return (
        <div
            ref={rootRef}
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: 8
                }}
            >
                {starArray.map((_, index) => (
                    <div
                        key={index}
                        ref={el => {
                            if (el) {
                                stars.current[index] = el;
                            }
                        }}
                        style={{
                            "--star-scale": 0,
                            "--dot-scale": 0.8,
                            "--star-before-r": 0,
                            "--star-before-y": 0,
                            "--star-after-r": 0,
                            "--star-after-y": 0,
                            "--star-o": 1,
                            "--star-blur": 0,
                            "--star-y": 0,
                            "--color": "#8A91B4",

                            position: "relative",
                            width: 64,
                            height: 64
                        } as React.CSSProperties}
                    >
                        {/* center dot */}

                        <div
                            style={{
                                position: "absolute",
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                                background: "var(--color)",
                                left: "50%",
                                top: "50%",
                                transform:
                                    "translate(-50%, -50%) scale(var(--dot-scale))"
                            }}
                        />

                        {/* star */}

                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                opacity: "var(--star-o)",
                                filter:
                                    "blur(calc(var(--star-blur) * 1px))",
                                transform:
                                    "translateY(calc(var(--star-y) * 1px)) scale(var(--star-scale))"
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "var(--color)",
                                    clipPath:
                                        "polygon(50% 5%, 65% 35%, 30% 60%, 2.5% 40%, 35% 35%)",
                                    transform:
                                        "translateY(calc(var(--star-before-y) * 1px)) rotate(calc(var(--star-before-r) * 1deg))"
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "var(--color)",
                                    clipPath:
                                        "polygon(65% 35%, 97.5% 40%, 70% 60%, 80% 95%, 50% 74%, 20% 95%, 30% 60%)",
                                    transform:
                                        "translateY(calc(var(--star-after-y) * 1px)) rotate(calc(var(--star-after-r) * 1deg))"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}