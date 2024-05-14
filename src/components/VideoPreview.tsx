import useVideoDetails from '../hooks/useVideoDetails';
import { VideoPreviewProps } from '../types/VideoPreviewProps';
import Loader from './Loader';
import VideoDescription from './VideoDescription';
import VideoPreviewImage from './VideoPreviewImage';
import VideoStreamDetail from './VideoStreamDetail';

const VideoPreview = ({
  videoId,
  videoDetailsGetter = useVideoDetails,
  ImagePreviewComponent = VideoPreviewImage,
  DescriptionComponent = VideoDescription,
  LoaderComponent = Loader
}: VideoPreviewProps) => {
  const videoDetails = videoDetailsGetter(videoId);

  return videoDetails ? (
    <div style={{ display: 'flex' }}>
      <ImagePreviewComponent videoDetails={videoDetails} />
      <div style={{ paddingLeft: '10px' }}>
        <DescriptionComponent videoDetails={videoDetails} />
        {'watching' in videoDetails && <VideoStreamDetail videoDetails={videoDetails} />}
      </div>
    </div>
  ) : (
    <LoaderComponent />
  );
};

export default VideoPreview;
