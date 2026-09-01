import './FollowButton.css';

interface FollowButtonProps {
  isFollowing: boolean;
  socialNetwork?: string;
  onClick?: () => void;
}

export default function FollowButton({
  isFollowing,
  socialNetwork,
  onClick,
}: FollowButtonProps) {
  const text = isFollowing
    ? socialNetwork === 'youtube'
      ? 'Suscrito'
      : 'Siguiendo'
    : socialNetwork === 'youtube'
      ? 'Suscribirse'
      : 'Seguir';

    const buttonClass = {
        instagram: 'follow-button--instagram',
        youtube: 'follow-button--youtube',
        tiktok: 'follow-button--tiktok',
        twitch: 'follow-button--twitch',
    }[socialNetwork as string] || 'follow-button--default';

  return (
    <button
      type="button"
      aria-label={text}
      className={`follow-button ${
        isFollowing ? 'follow-button--following' : buttonClass
      }`}
      onClick={onClick}
    >
      <span className="follow-button__content">
        {isFollowing && (
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="follow-button__icon"
          >
            <path
              d="M2.5 6.4 4.8 8.7 9.5 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}

        {text}
      </span>
    </button>
  );
}