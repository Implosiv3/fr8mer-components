import type { ReactNode } from "react";

import { AnimationElementContext } from "./AnimationElementContext";
import type { AnimationElementState } from "./types";

interface AnimationElementProviderProps {
    value: AnimationElementState;
    children: ReactNode;
}

export function AnimationElementProvider({
    value,
    children,
}: AnimationElementProviderProps) {
    return (
        <AnimationElementContext.Provider value={value}>
            {children}
        </AnimationElementContext.Provider>
    );
}