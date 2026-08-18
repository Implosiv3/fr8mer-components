import { useState } from "react";
import "./RedditComment.css";
import trophie1 from "../assets/trophies/2jd92wtn25g41_ImDeceased.png";
import trophie2 from "../assets/trophies/5izbv4fn0md41_Wholesome.png"
import trophie3 from "../assets/trophies/6vgr8y21i9741_PlusOne.png"
import trophie4 from "../assets/trophies/9avdcwgupta41_GottheW.png"
import trophie5 from "../assets/trophies/35d17tf5e5f61_oldrocketlike.png"
import trophie6 from "../assets/trophies/43zl6dfcg9e51_EvilCackle.png"
import RedditVerifiedBadgeBlackSVG from "../assets/svg/RedditVerifiedBadgeBlackSVG";
import RedditShareSVG from "../assets/svg/RedditShareSVG";
import RedditAwardSVG from "../assets/svg/RedditAwardSVG";
import RedditCommentSVG from "../assets/svg/RedditCommentSVG";
import RedditDownvoteSVG from "../assets/svg/RedditDownvoteSVG";
import RedditUpvoteSVG from "../assets/svg/RedditUpvoteSVG";

interface RedditCommentProps {
  username?: string;
  isVerified: boolean;
  avatar?: string;
  message?: string;
  upvotes?: number;
  comments?: number;
}

export function RedditComment({
  username = "Manuele",
  isVerified = false,
  avatar = "https://picsum.photos/100/100",
  message = "Mensaje de un componente para que veas",
  upvotes = 249,
  comments = 57,
}: RedditCommentProps) {
    const trophiesUrls = [
        trophie1,
        trophie2,
        trophie3,
        trophie4,
        trophie5,
        trophie6,
    ];

    const [trophiesNumber] = useState(
        () => Math.floor(Math.random() * (trophiesUrls.length + 1))
    );

    const [randomTrophiesUrls] = useState(
        () =>
            [...trophiesUrls]
            .sort(() => Math.random() - 0.5)
            .slice(0, trophiesNumber)
    );

  return (
    <div className="reddit-comment">
      <div className="reddit-comment__avatar">
        <img src={avatar} alt={username} />
      </div>

      <div className="reddit-comment__content">
        <div className="reddit-comment__header">
          <div className="reddit-comment__user">
            <span className="reddit-comment__username">
                {username}

                {isVerified && <RedditVerifiedBadgeBlackSVG />}
            </span>

                <div>
                    {randomTrophiesUrls.map((path, i) => (
                        <img
                            key={i}
                            src={path}
                            alt="Reddit trophies"
                            className="reddit-story__awards"
                        />
                    ))}
                </div>
          </div>
        </div>

        <p className="reddit-comment__message">{message}</p>

        <div className="reddit-comment__actions">
          <div className="reddit-comment__action">
            <RedditUpvoteSVG />
            <span>{upvotes}</span>
            <RedditDownvoteSVG />
          </div>

          <div className="reddit-comment__action">
            <RedditCommentSVG />
            <span>{comments}</span>
          </div>

          <div className="reddit-comment__action">
            <RedditAwardSVG />
            <span>Award</span>
          </div>

          <div className="reddit-comment__action">
            <RedditShareSVG />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}