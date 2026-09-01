import "./PhoneNotification.css";

interface PhoneNotificationProps {
  avatar: string;
  appName: string;
  time?: string;
  title: string;
}

export function PhoneNotification({
  avatar,
  appName,
  time = "now",
  title,
}: PhoneNotificationProps) {
  return (
    <div className="notification">
      <div className="notification__icon">
        <img
          src={avatar}
          alt={appName}
          draggable={false}
        />
      </div>

      <div className="notification__content">
        <div className="notification__header">
          <span className="notification__app">
            {appName}
          </span>

          <span className="notification__time">
            {time}
          </span>
        </div>

        <div className="notification__title">
          {title}
        </div>
      </div>
    </div>
  );
}