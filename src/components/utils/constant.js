const GOOGLE_API_KEY = "AIzaSyDMw6_ncBaLRuD1WGQLquPWnqfnF0yn6S8";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_SEARCH_VIDEO_API =
//   "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=" +
//   GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";