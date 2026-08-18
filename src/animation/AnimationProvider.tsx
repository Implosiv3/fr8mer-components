import type { ReactNode } from "react";

import { AnimationContext } from "./AnimationContext";
import type { AnimationState } from "./types";

interface AnimationProviderProps {
    value: AnimationState;
    children: ReactNode;
}

export function AnimationProvider({
    value,
    children,
}: AnimationProviderProps) {
    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
}