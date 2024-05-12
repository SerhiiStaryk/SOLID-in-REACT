import React, { useEffect, useState } from 'react';
import './App.css';

type VideoDetails = {
  previewUrl: string;
  title: string;
  author: string;
};

const loadVideoDetails = (id: string): Promise<VideoDetails> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          previewUrl: 'https://i.ytimg.com/vi/3KxZeE9LXZo/sddefault.jpg',
          title: 'Solid principles in React function components',
          author: '@SerhiiStaryk',
        }),
      500
    )
  );
};

const VideoPreview = ({ videoId }: { videoId: string }) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails>();

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
      </div>
    </div>
  ) : (
    <span>...Loading</span>
  );
};

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <VideoPreview videoId={'testVideo'} />
    </div>
  );
}

export default App;
