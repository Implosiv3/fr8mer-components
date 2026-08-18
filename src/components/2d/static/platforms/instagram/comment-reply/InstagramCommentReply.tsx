import "./InstagramCommentReply.css";

interface InstagramCommentReplyProps {
  avatar?: string;
  comment: string;
  replyingTo: string;
  isVerified: boolean;
}

export function InstagramCommentReply({
  avatar = "/images/default-instagram-profile.jpg",
  comment = 'Comentario de respuesta',
  replyingTo = 'Agapito',
  isVerified = false,
}: InstagramCommentReplyProps) {
  return (
    <div className="instagram-reply">
      <div className="instagram-reply__avatar">
        <img
          src={avatar}
          alt="Instagram profile"
          className="instagram-reply__avatar-image"
        />
      </div>

      <div className="instagram-reply__content">
        <span className="instagram-reply__comment">
          {comment}
        </span>

        <span className="instagram-reply__meta">
            Replying to {replyingTo}
            {isVerified && (
                <svg
                    className="instagram-reply__verified"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Verified"
                    >
                    <path
                        d="M15.2114 0L17.1714 3.03429L20.7829 3.21143L20.9657 6.82286L24 8.78286L22.3543 12L24 15.2114L20.9657 17.1714L20.7886 20.7829L17.1771 20.9657L15.2171 24L12 22.3543L8.78857 24L6.82857 20.9657L3.21714 20.7886L3.03429 17.1771L0 15.2171L1.64571 12L0 8.78857L3.03429 6.82857L3.21143 3.21714L6.82286 3.03429L8.78286 0L12 1.64571L15.2114 0Z"
                        fill="#42A5F5"
                    />
                    <path
                        d="M10.5086 16.1429L6.8 12.4343L8.01143 11.2229L10.5314 13.7371L15.9943 8.44L17.1886 9.66857L10.5086 16.1429Z"
                        fill="white"
                    />
                </svg>
                )}
        </span>
      </div>
    </div>
  );
}