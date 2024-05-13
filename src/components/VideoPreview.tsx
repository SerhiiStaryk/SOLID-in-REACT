import useVideoDetails from '../hooks/useVideoDetails';
import Loader from './Loader';
import VideoDescription from './VideoDescription';
import VideoPreviewImage from './VideoPreviewImage';
import VideoStreamDetail from './VideoStreamDetail';

const VideoPreview = ({ videoId }: { videoId: string }) => {
  const videoDetails = useVideoDetails(videoId);

  return videoDetails ? (
    <div style={{ display: 'flex' }}>
      <VideoPreviewImage videoDetails={videoDetails} />
      <div style={{ paddingLeft: '10px' }}>
        <VideoDescription videoDetails={videoDetails} />
        {'watching' in videoDetails && <VideoStreamDetail videoDetails={videoDetails} />}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default VideoPreview;
