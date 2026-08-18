import { createContext } from "react";
import type { AnimationState } from "./types";

export const AnimationContext = createContext<AnimationState | null>(null);