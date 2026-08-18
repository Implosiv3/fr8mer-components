import { useContext } from "react";

import { AnimationContext } from "./AnimationContext";

export function useAnimation() {
    const context = useContext(AnimationContext);

    if (!context) {
        throw new Error(
            "useAnimation must be used inside an AnimationProvider",
        );
    }

    return context;
}