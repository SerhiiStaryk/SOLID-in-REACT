import StreamDescription from './components/StreamDescription';
import getVideoPreview from './components/getVideoPreview';
import useStreamDetails from './hooks/useStreamDetails';
import useVideoDetails from './hooks/useVideoDetails';

const VideoPreview = getVideoPreview(useVideoDetails);
const StreamPreview = getVideoPreview(useStreamDetails);

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <VideoPreview videoId='testVideo' />
      <br />
      <StreamPreview
        renderDescription={video => <StreamDescription {...video}/>}
        videoId='testStream'
      />
    </div>
  );
}

export default App;
