/*
Inspired by this:
- https://css-loaders.com/spinner/
*/
import { useAnimation } from "../../../../animation/useAnimation";
import "./SpinnerLoader.css";

type SpinnerLoaderProps = {
  rotationsPerSecond: number
};

export function SpinnerLoader({
  rotationsPerSecond = 1
}: SpinnerLoaderProps) {
  const { time } = useAnimation();

  const angle =
      time *
      rotationsPerSecond *
      360;

  return (
    <div
      className="loader"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
    </div>
  );
}