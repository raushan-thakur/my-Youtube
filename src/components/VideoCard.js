import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
      </ul>
    </div>
  );
};

export const AdCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
