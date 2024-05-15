import { VideoDetails } from '../types/VideoDetails';
import { VideoPreviewProps } from '../types/VideoPreviewProps';
import Loader from './Loader';
import VideoDescription from './VideoDescription';
import VideoPreviewImage from './VideoPreviewImage';

// Фабрика
const getVideoPreview =
  <T extends VideoDetails>(videoDetailsGetter: (videoId: string) => T | undefined) =>
  ({
    videoId,
    renderImagePreview = video => <VideoPreviewImage {...video} />,
    renderDescription = video => <VideoDescription {...video} />,
    LoaderComponent = Loader,
  }: VideoPreviewProps<T>) => {
    const videoDetails = videoDetailsGetter(videoId);

    return videoDetails ? (
      <div style={{ display: 'flex' }}>
        {renderImagePreview(videoDetails)}
        <div style={{ paddingLeft: '10px' }}>{renderDescription(videoDetails)}</div>
      </div>
    ) : (
      <LoaderComponent />
    );
  };

export default getVideoPreview;
