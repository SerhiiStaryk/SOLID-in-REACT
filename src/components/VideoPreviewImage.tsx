import { VideoDetails } from '../types/VideoDetails';

const VideoPreviewImage = ({videoDetails}: {videoDetails: VideoDetails}) => {
  return (
    <img
      style={{ width: '200px', borderRadius: '10px', border: '1px solid' }}
      src={videoDetails.previewUrl}
      alt={videoDetails.title}
    />
  );
}

export default VideoPreviewImage;