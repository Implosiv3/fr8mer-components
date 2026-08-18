import "./RedditPost.css";
import RedditAwardSVG from "../assets/svg/RedditAwardSVG";
import RedditCommentSVG from "../assets/svg/RedditCommentSVG";
import RedditDownvoteSVG from "../assets/svg/RedditDownvoteSVG";
import RedditShareSVG from "../assets/svg/RedditShareSVG";
import RedditUpvoteSVG from "../assets/svg/RedditUpvoteSVG";
import RedditVerifiedBadgeBlackSVG from "../assets/svg/RedditVerifiedBadgeBlackSVG";

interface RedditPostProps {
  subreddit: string;
  username: string;
  isVerified: boolean;
  title: string;
  avatar: string;
  upvotes: number;
  comments: number;
}

export function RedditPost({
  subreddit = "AskReddit",
  username = "Username",
  isVerified = false,
  title = "Título del post",
  avatar = "https://picsum.photos/100/100",
  upvotes = 33,
  comments = 67,
}: RedditPostProps) {
  return (
    <div className="reddit-post">
      <div className="reddit-post__header">
        <div className="reddit-post__avatar">
          <img src={avatar} alt={username} />
        </div>

        <div className="reddit-post__meta">
          <span className="reddit-post__subreddit">
            r/{subreddit}
          </span>

          <span className="reddit-post__username">
            {username}

            {isVerified && (
                <RedditVerifiedBadgeBlackSVG />
            )}
          </span>
        </div>
      </div>

      <div className="reddit-post__title">
        {title}
      </div>

      <div className="reddit-post__actions">
        <button className="reddit-post__action">
            <RedditUpvoteSVG />
            {upvotes}
            <RedditDownvoteSVG />
        </button>

        <button className="reddit-post__action">
            <RedditCommentSVG />
          {comments}
        </button>

        <button className="reddit-post__action">
            <RedditAwardSVG />
        </button>

        <button className="reddit-post__action">
            <RedditShareSVG />
            Share
        </button>
      </div>
    </div>
  );
}