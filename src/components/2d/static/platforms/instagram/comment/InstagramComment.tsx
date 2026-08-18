import "./InstagramComment.css";

interface InstagramCommentProps {
  avatar: string;
  username: string;
  text: string;
  time?: string;
  isLiked?: boolean;
}

export function InstagramComment({
  avatar,
  username,
  text,
  time = "2 d",
  isLiked = false,
}: InstagramCommentProps) {
  return (
    <div className="instagram-comment">
      <div className="instagram-comment__avatar">
        <img
          src={avatar}
          alt={username}
          draggable={false}
        />
      </div>

      <div className="instagram-comment__content">
        <div className="instagram-comment__text">
          <span className="instagram-comment__username">
            {username}
          </span>

          <span>{text}</span>
        </div>

        <div className="instagram-comment__meta">
          <span>{time}</span>
          <span>Responder</span>
        </div>
      </div>

      <div className="instagram-comment__like">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={isLiked ? "#ff3040" : "none"}
        >
          <path
            d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z"
            stroke={isLiked ? "#ff3040" : "#262626"}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}