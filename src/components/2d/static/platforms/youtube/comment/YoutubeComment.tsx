import "./YoutubeComment.css";

interface YoutubeCommentProps {
  avatar: string;
  username: string;
  time: string;
  comment: string;
  likes?: string;
}

export function YoutubeComment({
  avatar = 'https://picsum.photos/100/100',
  username = 'Juanillo',
  time = 'hace 2 días',
  comment = 'Comentario de prueba',
  likes = "0",
}: YoutubeCommentProps) {
  return (
    <div className="yt-comment">
      <img
        className="yt-comment__avatar"
        src={avatar}
        alt={username}
      />

      <div className="yt-comment__content">
        <div className="yt-comment__header">
          <span className="yt-comment__username">{username}</span>
          <span className="yt-comment__time">{time}</span>
        </div>

        <div className="yt-comment__text">
          {comment}
        </div>

        <div className="yt-comment__actions">
          <button className="yt-comment__action">
            <svg viewBox="0 0 24 24">
              <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h14.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39zm-11.77 9H4v-8h3v8z" />
            </svg>

            <span>{likes}</span>
          </button>

          <button className="yt-comment__action">
            <svg viewBox="0 0 24 24">
              <path d="M17 4H6.57c-1.07 0-1.98.67-2.19 1.61l-1.34 6C2.77 12.85 3.82 14 5.23 14h4.23l-1.52 4.94C7.62 19.97 8.46 21 9.62 21c.58 0 1.14-.24 1.52-.65L17 14h4V4h-4z" />
            </svg>
          </button>

          <button className="yt-comment__reply">
            Responder
          </button>
        </div>
      </div>
    </div>
  );
}