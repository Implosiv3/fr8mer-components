import './InstagramTooltip.css';

interface InstagramTooltipProps {
  username: string;
  isVerified?: boolean;
  trianglePosition: string;
  opacity: number;
}

// TODO: Customize the triangle position (or None)
export function InstagramTooltip({
  username,
  isVerified = false,
  trianglePosition = "bottom",
  opacity = 1.0,
}: InstagramTooltipProps) {
  return (
    <div
      className="instagram-tooltip"
      style={{
        opacity: Number(opacity),
      }}
    >
      <span>@{username}</span>

      {isVerified && (
        <svg
          className="instagram-tooltip__verified"
          width="42"
          height="42"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 2L24.5 5.2L30 4.5L32.3 9L37.5 11.5L36.8 17L40 21L36.8 25L37.5 30.5L32.3 33L30 37.5L24.5 36.8L20 40L15.5 36.8L10 37.5L7.7 33L2.5 30.5L3.2 25L0 21L3.2 17L2.5 11.5L7.7 9L10 4.5L15.5 5.2L20 2Z"
            fill="#2EA6FF"
          />
          <path
            d="M12 20L17 25L28 14"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {trianglePosition != "none" && (
        <div
          className={
            trianglePosition == "top"
              ? 'instagram-tooltip__triangle_top'
              : 'instagram-tooltip__triangle_bottom'
          }
        />
      )}
    </div>
  );
}