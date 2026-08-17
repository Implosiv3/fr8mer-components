import "./DiscordMessage.css";
import defaultAvatarImage from "../../../assets/discord-logo.jpg";

interface DiscordMessageProps {
  username: string;
  avatar_img?: string;
  timestamp: string;
  message: string;
}

export function DiscordMessage({
  username,
  avatar_img,
  timestamp,
  message,
}: DiscordMessageProps) {
  return (
    <div className="discord-message">
      <div className="discord-message-avatar">
        {avatar_img ? (
            <img
                src={avatar_img || defaultAvatarImage}
                alt={username}
            />
        ) : (
          username.charAt(0).toUpperCase()
        )}
      </div>

      <div className="discord-message-body">
        <div className="discord-message-header">
          <span className="discord-message-username">
            {username}
          </span>

          <span className="discord-message-timestamp">
            {timestamp}
          </span>
        </div>

        <div className="discord-message-content">
          {message}
        </div>
      </div>
    </div>
  );
}