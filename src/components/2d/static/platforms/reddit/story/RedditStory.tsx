/*
The awards depend on the post, but you can
find them here:
- https://github.com/androiddevnotes/reddit-awards
*/
import { useState } from "react";
import "./RedditStory.css";
import trophie1 from "../../../../../../assets/reddit/trophies/2jd92wtn25g41_ImDeceased.png";
import trophie2 from "../../../../../../assets/reddit/trophies/5izbv4fn0md41_Wholesome.png"
import trophie3 from "../../../../../../assets/reddit/trophies/6vgr8y21i9741_PlusOne.png"
import trophie4 from "../../../../../../assets/reddit/trophies/9avdcwgupta41_GottheW.png"
import trophie5 from "../../../../../../assets/reddit/trophies/35d17tf5e5f61_oldrocketlike.png"
import trophie6 from "../../../../../../assets/reddit/trophies/43zl6dfcg9e51_EvilCackle.png"
import RedditVerifiedBadgeBlueSVG from "../assets/svg/RedditVerifiedBadgeBlueSVG copy";
import RedditUpvoteSVG from "../assets/svg/RedditUpvoteSVG";
import RedditShareSVG from "../assets/svg/RedditShareSVG";

interface RedditStoryProps {
  avatar?: string;
  username: string;
  isVerified: boolean;
  title: string;
  upvotes?: number;
  comments?: number;
}

export function RedditStory({
  avatar = "https://picsum.photos/100/100",
  username = "Username",
  isVerified = false,
  title = "Título de Reddti",
  upvotes = 249,
  comments = 57,
}: RedditStoryProps) {
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
    <div className="reddit-story">
      <div className="reddit-story__header">
        <div className="reddit-story__avatar">
          <img src={avatar} alt={username} />
        </div>

        <div className="reddit-story__user">
          <span className="reddit-story__username">
            {username}

            {isVerified && (
                <RedditVerifiedBadgeBlueSVG />
            )}
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

      <div className="reddit-story__content">
        {title}
      </div>

      <div className="reddit-story__footer">
        <div className="reddit-story__stats">
          <div className="reddit-story__stat">
            <RedditUpvoteSVG />
            <span>{upvotes}</span>
          </div>

          <div className="reddit-story__stat">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 19H1.871a.886.886 0 0 1-.798-.52.886.886 0 0 1 .158-.941L3.1 15.771A9 9 0 1 1 10 19Zm-6.549-1.5H10a7.5 7.5 0 1 0-5.323-2.219l.54.545L3.451 17.5Z" fill="currentColor"></path>
            </svg>
            <span>{comments}</span>
          </div>
        </div>

        <div className="reddit-story__share">
          <RedditShareSVG />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}