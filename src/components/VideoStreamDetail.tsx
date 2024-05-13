import { StreamDetails } from '../types/StreamDetails';

const VideoStreamDetail = ({ videoDetails }: { videoDetails: StreamDetails }) => {
  return (
    <>
      <div style={{ color: '#808080' }}>{videoDetails.watching} watching</div>
      <span style={{ backgroundColor: 'red', color: 'white', padding: '3px', borderRadius: '3px' }}>live</span>
    </>
  );
};

export default VideoStreamDetail;
