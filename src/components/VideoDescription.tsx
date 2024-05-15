import { VideoDetails } from '../types/VideoDetails';

export type VideoDescriptionProps = Pick<VideoDetails, 'author' | 'title'>;

const VideoDescription = ({ author, title }: VideoDescriptionProps) => {
  return (
    <>
      <div style={{ fontWeight: 'bold' }}>{title}</div>
      <div style={{ color: '#808080' }}>{author}</div>
    </>
  );
};

export default VideoDescription;
