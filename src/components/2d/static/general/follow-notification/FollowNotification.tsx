import FollowButton from "./FollowButton";
import "./FollowNotification.css";
import InstagramLogoSVG from "./svg/InstagramLogoSVG";
import TiktokLogoSVG from "./svg/TiktokLogoSVG";
import TwitchLogoSVG from "./svg/TwitchLogoSVG";
import YoutubeLogoSVG from "./svg/YoutubeLogoSVG";

interface FollowNotificationProps {
  avatar: string;
  name: string;
  username: string;
  socialNetwork: "instagram" | "youtube" | "tiktok" | "twitch";
  isVerified?: boolean;
  isFollowing?: boolean;
}

export default function FollowNotification({
  avatar,
  name,
  username,
  socialNetwork = 'instagram',
  isVerified = false,
  isFollowing = false,
}: FollowNotificationProps) {
    const logosSvg = {
        instagram: InstagramLogoSVG,
        youtube: YoutubeLogoSVG,
        tiktok: TiktokLogoSVG,
        twitch: TwitchLogoSVG,
    };

  const LogoSvg = logosSvg[socialNetwork] ?? "i";
        
  return (
    <div className="follow-notification-wrapper">
      <div className="follow-notification-scale">
        <div className="follow-notification">
          <img
            src={avatar}
            alt={name}
            className="follow-notification__avatar"
          />

          <div className="follow-notification__content">
            <div className="follow-notification__header">
              <span className="follow-notification__name">{name}</span>

              {isVerified && (
                <svg
                  viewBox="0 0 100 100"
                  width="14"
                  height="14"
                  aria-hidden="true"
                  className="follow-notification__verified"
                >
                  <path
                    d="M39.39,10.40Q50.00,-4.40 60.61,10.40Q77.20,2.89 78.99,21.01Q97.11,22.80 89.60,39.39Q104.40,50.00 89.60,60.61Q97.11,77.20 78.99,78.99Q77.20,97.11 60.61,89.60Q50.00,104.40 39.39,89.60Q22.80,97.11 21.01,78.99Q2.89,77.20 10.40,60.61Q-4.40,50.00 10.40,39.39Q2.89,22.80 21.01,21.01Q22.80,2.89 39.39,10.40Z"
                    fill="#1D9BF0"
                  />
                  <path
                    d="M30 52 L44 65 L72 38"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <div className="follow-notification__meta">
              <span className="follow-notification__instagram-icon">
                <LogoSvg />
              </span>

              <span className="follow-notification__username">
                @{username}
              </span>
            </div>
          </div>

          <FollowButton isFollowing={isFollowing} socialNetwork={socialNetwork} />
        </div>
      </div>
    </div>
  );
}