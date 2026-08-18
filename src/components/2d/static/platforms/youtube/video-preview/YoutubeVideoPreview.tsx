import "./YoutubeVideoPreview.css";

interface YoutubeVideoPreviewProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  isVerified: boolean;
  duration: string;
  avatar: string;
  age: string;
}

export function YoutubeVideoPreview({
  thumbnail = "https://picsum.photos/1920/1080",
  title = "La vida es bella",
  channel = "Cine de Época",
  views = "33",
  isVerified = true,
  duration = "13:04",
  avatar = "https://picsum.photos/100/100",
  age = '3d'
}: YoutubeVideoPreviewProps) {
  return (
    <div className="block">
      <div className="thumbnail-wrapper">
        <div className="duration">
          {duration}
        </div>

        <img
          src={thumbnail}
          alt="thumbnail"
          className="thumbnail"
        />
      </div>

      <div className="meta-row">
        <img
          src={avatar}
          alt={channel}
          className="avatar"
        />

        <div className="meta">
          <div className="title">
            {title}
          </div>

          <div className="secondary">
            <div className="channel-row">
              <span>{channel}</span>

              {isVerified && (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"
                  />
                </svg>
              )}
            </div>

            <div>
              {views} views • {age}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}