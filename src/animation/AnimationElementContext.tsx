import { createContext } from "react";
import type { AnimationElementState } from "./types";

export const defaultAnimationElementState: AnimationElementState = {
    frame: 0,
    time: 0,
    progress: 0,
};

export const AnimationElementContext =
    createContext<AnimationElementState>(
        defaultAnimationElementState,
    );