//   - -   A N I M A T I O N   - -
/*
    This below is to be able to implement the
    animated components that need parameters
    related to the animation, such as the
    frame, the progress, etc. With this, the
    animated components are already prepared
    to work with your animation engine.
*/
export { AnimationProvider } from "./animation/AnimationProvider";
export { AnimationElementProvider } from "./animation/AnimationElementProvider";

export { useAnimation } from "./animation/useAnimation";
export { useAnimationElement } from "./animation/useAnimationElement";

export type {
    AnimationState,
    AnimationElementState,
} from "./animation/types";



// TODO: Clasify this file better


export { RoundedBordersImage } from "./components/2d/static/image/rounded-borders/RoundedBordersImage"

//  - -   P L A T F O R M S   - -

// Discord
export { DiscordMessage } from "./components/2d/static/platforms/discord/DiscordMessage";

// Booking
export { BookingReview } from "./components/2d/static/platforms/booking/review/BookingReview"

// Instagram
export { InstagramComment } from "./components/2d/static/platforms/instagram/comment/InstagramComment"
export { InstagramCommentReply } from "./components/2d/static/platforms/instagram/comment-reply/InstagramCommentReply"
export { InstagramTooltip } from "./components/2d/static/platforms/instagram/tooltip/InstagramTooltip"
export { InstagramVisualizationsInfoPanelCard } from "./components/2d/static/platforms/instagram/visualizations-info-panel/InstagramVisualizationsInfoPanelCard"

// Tiktok
export { TiktokCommentReply } from "./components/2d/static/platforms/tiktok/comment-reply/TiktokCommentReply"

// Twitter - X
export { TwitterPost } from "./components/2d/static/platforms/twitter/post/TwitterPost"

// Youtube
export { YoutubeComment } from "./components/2d/static/platforms/youtube/comment/YoutubeComment"
export { YoutubeVideoPreview } from "./components/2d/static/platforms/youtube/video-preview/YoutubeVideoPreview"
export { YoutubeVideoPreviewSmall } from "./components/2d/static/platforms/youtube/video-preview/YoutubeVideoPreviewSmall"

// Google
export { GoogleSearchBarSmall } from "./components/2d/static/platforms/google/search-bar/GoogleSearchBarSmall"

// WhatsApp
export { WhatsAppMessage } from "./components/2d/static/platforms/whatsapp/message/WhatsAppMessage"

// Reddit
export { RedditComment } from "./components/2d/static/platforms/reddit/comment/RedditComment"
export { RedditPost } from "./components/2d/static/platforms/reddit/post/RedditPost"
export { RedditStory } from "./components/2d/static/platforms/reddit/story/RedditStory"


//  - -   T E X T  - - 

// Sms
export { SmsMessage } from "./components/2d/static/text/message/sms/SmsMessage"


//   - -   C U S T O M   - -

// Quizz
// TODO: Install 'fitty'
export { QuizzAnswerOption } from "./components/2d/static/custom/quizz/answers/QuizzAnswerOption"
export { QuizzAnswerNoOption } from "./components/2d/static/custom/quizz/answers/QuizzAnswerNoOption"



//   - -   G E N E R A L   - -
export { FollowNotification } from "./components/2d/static/general/follow-notification/FollowNotification"
export { LocationPin } from "./components/2d/static/general/location/LocationPin"
export { PhoneNotification } from "./components/2d/static/general/phone/PhoneNotification"




//   - -   A N I M A T E D   - -
export { SimpleProgressBar } from "./components/2d/animated/progress-bar/SimpleProgressBar"
export { SpinnerLoader } from "./components/2d/animated/loader/SpinnerLoader"

//  - -    G S A P   - - 
export { StarsRating } from "./components/2d/animated/gsap/StarsRating"

//  - -   T H R E E   ( 3 D )  - -
export { RipPhoto } from "./components/3d/animated/RipPhoto"
export { VoxelizedImage } from "./components/3d/animated/VoxelizedImage"
export { PlaneImage } from "./components/3d/animated/PlaneImage"