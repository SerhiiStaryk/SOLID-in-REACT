import { useEffect, useState } from 'react';
import loadVideoDetails from '../services/loadVideoDetails';
import { VideoDetails } from '../types/VideoDetails';
import { StreamDetails } from '../types/StreamDetails';

const VideoPreview = ({ videoId }: { videoId: string }) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | StreamDetails>();

  useEffect(() => {
    loadVideoDetails(videoId).then(vd => setVideoDetails(vd));
  }, [videoId]);

  return videoDetails ? (
    <div style={{ display: 'flex' }}>
      <img
        style={{ width: '200px', borderRadius: '10px', border: '1px solid' }}
        src={videoDetails.previewUrl}
        alt={videoDetails.title}
      />
      <div style={{ paddingLeft: '10px' }}>
        <div style={{ fontWeight: 'bold' }}>{videoDetails.title}</div>
        <div style={{ color: '#808080' }}>{videoDetails.author}</div>
        {'watching' in videoDetails && (
          <>
            <div style={{ color: '#808080' }}>{videoDetails.watching} watching</div>
            <span style={{ backgroundColor: 'red', color: 'white', padding: '3px', borderRadius: '3px' }}>live</span>
          </>
        )}
      </div>
    </div>
  ) : (
    <span>...Loading</span>
  );
};

export default VideoPreview;
