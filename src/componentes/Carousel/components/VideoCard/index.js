import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { VideoCardContainer, VideoCardContainerPreview, ResponsiveIframe } from './styles';
import {VideoContainer} from '../../../BannerMain/components/VideoIframeResponsive/styles'

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const [isHovering, setIsHovering] = useState(false);
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;

  const getEmbedVideo = () => {
    setIsHovering(true);
    
  };

  const delayEmbed = useCallback(debounce(getEmbedVideo, 1000), []);

  const cancelEmbed = () => {
    delayEmbed.cancel();
    setIsHovering(false);
  };

  return (
    <div onMouseEnter={delayEmbed} onMouseLeave={cancelEmbed}>
    <VideoCardContainer 
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || "#62D2F9" }}>
      <span className="titulo">{videoTitle}</span>
    </VideoCardContainer>
    {
        (isHovering && (
        <VideoCardContainerPreview>
            <ResponsiveIframe
              title={videoTitle}
              src={`https://www.youtube.com/embed/${getYouTubeId(videoURL)}?autoplay=1&mute=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
         </VideoCardContainerPreview>
        ))
      }
    </div>
  );
}

export default VideoCard;




