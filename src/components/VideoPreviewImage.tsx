import { VideoDetails } from '../types/VideoDetails';

export type VideoPreviewImageProps = Pick<VideoDetails, 'previewUrl' | 'title'>;

const VideoPreviewImage = ({ previewUrl, title }: VideoPreviewImageProps) => {
  return (
    <img
      style={{ width: '200px', borderRadius: '10px', border: '1px solid' }}
      src={previewUrl}
      alt={title}
    />
  );
};

export default VideoPreviewImage;
