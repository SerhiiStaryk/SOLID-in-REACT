import { useEffect, useState } from 'react';
import { StreamDetails } from '../types/StreamDetails';
import loadStreamDetails from '../services/loadStreamDetails';

const useStreamDetails = (videoId: string) => {
  const [videoDetails, setVideoDetails] = useState<StreamDetails>();

  useEffect(() => {
    loadStreamDetails(videoId).then(vd => setVideoDetails(vd));
  }, [videoId]);

  return videoDetails;
};

export default useStreamDetails;
