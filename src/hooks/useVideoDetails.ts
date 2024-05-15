import { useEffect, useState } from 'react';
import { VideoDetails } from '../types/VideoDetails';
import loadVideoDetails from '../services/loadVideoDetails';

const useVideoDetails = (videoId: string) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails>();

  useEffect(() => {
    loadVideoDetails(videoId).then(vd => setVideoDetails(vd));
  }, [videoId]);

  return videoDetails;
};

export default useVideoDetails;