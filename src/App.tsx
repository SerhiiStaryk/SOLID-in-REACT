import VideoPreview from './components/VideoPreview';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <VideoPreview videoId={'testVideo'} />
      <br />
      <VideoPreview videoId={'testStream'} />
    </div>
  );
}

export default App;
