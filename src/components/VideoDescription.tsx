import { VideoDetails } from '../types/VideoDetails';

const VideoDescription = ({ videoDetails }: { videoDetails: VideoDetails }) => {
  return (
    <>
      <div style={{ fontWeight: 'bold' }}>{videoDetails.title}</div>
      <div style={{ color: '#808080' }}>{videoDetails.author}</div>
    </>
  );
};

export default VideoDescription;
