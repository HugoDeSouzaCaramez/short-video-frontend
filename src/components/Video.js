import React from 'react';
import './Video.css';
const Video = () => {
  return (
    <div className="video">
      <video
        src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        className="video__player"
        loop
      ></video>
    </div>
  );
};
export default Video;
