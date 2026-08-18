import "./BookingReview.css";

interface BookingReviewProps {
  name: string;
  country: string;
  score: string;
  scoreLabel: string;
  title: string;
  text: string;
  date: string;
}

export function BookingReview({
  name,
  country,
  score,
  scoreLabel,
  title,
  text,
  date,
}: BookingReviewProps) {
  return (
    <div 
        className="booking-review"
    >
      <div className="booking-review-header">
        <div className="booking-review-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="booking-review-user">
          <div className="booking-review-name">
            {name}
          </div>

          <div className="booking-review-country">
            {country}
          </div>
        </div>

        <div className="booking-review-rating">
          <div className="booking-review-score">
            {score}
          </div>

          <div className="booking-review-score-label">
            {scoreLabel}
          </div>
        </div>
      </div>

      <div className="booking-review-content">
        <div className="booking-review-title">
          {title}
        </div>

        <div className="booking-review-text">
          {text}
        </div>
      </div>

      <div className="booking-review-footer">
        {date}
      </div>
    </div>
  );
}