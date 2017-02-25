import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoList = props.videos.map((video) => {
    return (
      <VideoListItem 
        video={video} 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} />
      );
  });
  return(
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  );
}

export default VideoList;