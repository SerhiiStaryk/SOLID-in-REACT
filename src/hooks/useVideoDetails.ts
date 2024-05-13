import { useEffect, useState } from 'react';
import { VideoDetails } from '../types/VideoDetails';
import { StreamDetails } from '../types/StreamDetails';
import loadVideoDetails from '../services/loadVideoDetails';

const useVideoDetails = (videoId: string) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | StreamDetails>();

  useEffect(() => {
    loadVideoDetails(videoId).then(vd => setVideoDetails(vd));
  }, [videoId]);

  return videoDetails;
};

export default useVideoDetails;
