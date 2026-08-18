import { useContext } from "react";

import { AnimationElementContext } from "./AnimationElementContext";

export function useAnimationElement() {
    return useContext(AnimationElementContext);
}