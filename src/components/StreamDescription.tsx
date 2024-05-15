import { StreamDetails } from '../types/StreamDetails';
import VideoDescription from './VideoDescription';

const StreamDescription = ({ videoDetails }: { videoDetails: StreamDetails }) => {
  return (
    <>
      <VideoDescription videoDetails={videoDetails} />
      <div style={{ color: '#808080' }}>{videoDetails.watching} watching</div>
      <span style={{ backgroundColor: 'red', color: 'white', padding: '3px', borderRadius: '3px' }}>live</span>
    </>
  );
};

export default StreamDescription;
