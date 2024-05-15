import { StreamDetails } from '../types/StreamDetails';
import VideoDescription, { VideoDescriptionProps } from './VideoDescription';

type StreamDescriptionProps = VideoDescriptionProps & Pick<StreamDetails, 'watching'>;

const StreamDescription = ({ watching, ...rest }: StreamDescriptionProps) => {
  return (
    <>
      <VideoDescription {...rest} />
      <div style={{ color: '#808080' }}>{watching} watching</div>
      <span style={{ backgroundColor: 'red', color: 'white', padding: '3px', borderRadius: '3px' }}>live</span>
    </>
  );
};

export default StreamDescription;
