import { createContext } from "react";
import type { AnimationState } from "./types";

export const defaultAnimationState: AnimationState = {
    frame: 0,
    fps: 60,
    time: 0,
};

export const AnimationContext =
    createContext<AnimationState>(defaultAnimationState);