import "./YoutubeVideoPreviewSmall.css";

interface YoutubeVideoPreviewSmallProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  age: string;
  isVerified: boolean;
  duration: string;
}

export function YoutubeVideoPreviewSmall({
  thumbnail = "https://picsum.photos/1920/1080",
  title = "La vida es bella",
  channel = "Cine de Época",
  views = "33",
  age = '3d',
  isVerified = false,
  duration = "13:04",
}: YoutubeVideoPreviewSmallProps) {
  return (
    <div className="yt-sidebar-video">
      <div className="yt-thumbnail-container">
        <img
          src={thumbnail}
          alt={title}
          className="yt-thumbnail"
        />

        <div className="yt-duration">
          {duration}
        </div>
      </div>

      <div className="yt-video-info">
        <div className="yt-title-row">
          <h3 className="yt-title">{title}</h3>

          <button className="yt-menu-btn">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
            >
              <circle cx="12" cy="5" r="1.8" />
              <circle cx="12" cy="12" r="1.8" />
              <circle cx="12" cy="19" r="1.8" />
            </svg>
          </button>
        </div>

        <div className="yt-channel">
          <span>{channel}</span>

          {isVerified && (
            <span className="yt-verified">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path d="M12 2l2.1 2.3 3.1-.3.9 3 2.9 1.2-1.2 2.9 1.2 2.9-2.9 1.2-.9 3-3.1-.3L12 22l-2.1-2.3-3.1.3-.9-3-2.9-1.2 1.2-2.9-1.2-2.9 2.9-1.2.9-3 3.1.3L12 2zm-1 14l6-6-1.4-1.4L11 13.2l-2.6-2.6L7 12l4 4z" />
              </svg>
            </span>
          )}
        </div>

        <div className="yt-meta">
          {views} • {age}
        </div>
      </div>
    </div>
  );
};