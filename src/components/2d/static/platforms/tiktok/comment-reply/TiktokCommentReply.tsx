import "./TiktokCommentReply.css";

interface TiktokCommentReplyProps {
  avatar?: string;
  comment: string;
  replyingTo: string;
  isVerified: boolean;
}

export function TiktokCommentReply({
  avatar = "https://picsum.photos/100/100",
  comment = 'Comentario de respuesta',
  replyingTo = 'Agapito',
  isVerified = false,
}: TiktokCommentReplyProps) {
  return (
    <div className="tiktok-reply">
      <div className="tiktok-reply__bubble">
        <span className="tiktok-reply__header">
          Reply to {replyingTo}'s
          {isVerified && (
            <svg
              className="tiktok-reply__verified"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Verified"
            >
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#4DD0E1"
              />
              <path
                d="M11.0946 16.014C10.749 16.014 10.4034 15.882 10.14 15.6186L6.4902 11.9682C5.9628 11.4414 5.9628 10.5864 6.4902 10.059C7.017 9.5316 7.8726 9.5316 8.3994 10.059L12.0492 13.7094C12.5766 14.2362 12.5766 15.0912 12.0492 15.6186C11.7858 15.882 11.4402 16.014 11.0946 16.014Z"
                fill="white"
              />
              <path
                d="M11.0946 16.014C10.749 16.014 10.4034 15.882 10.14 15.6186C9.6126 15.0918 9.6126 14.2368 10.14 13.7094L15.8634 7.986C16.3902 7.4586 17.2458 7.4586 17.7726 7.986C18.3 8.5128 18.3 9.3678 17.7726 9.8952L12.0492 15.6186C11.7858 15.882 11.4402 16.014 11.0946 16.014Z"
                fill="white"
              />
            </svg>
          )}
          comment
        </span>

        <div className="tiktok-reply__body">
          <div className="tiktok-reply__avatar">
            <img
              src={avatar}
              alt="TikTok profile"
              className="tiktok-reply__avatar-image"
            />
          </div>

          <span className="tiktok-reply__comment">
            {comment}
          </span>
        </div>
      </div>

      <svg
        className="tiktok-reply__tail"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M0 0H24L8.33107 15.7991C7.13233 17.0078 5.5253 17.6842 3.85217 17.6842C1.72468 17.6842 0 15.8982 0 13.695V0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}