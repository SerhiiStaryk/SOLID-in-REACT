import { StreamDetails } from '../types/StreamDetails';
import { VideoDetails } from '../types/VideoDetails';

const loadVideoDetails = (id: string): Promise<VideoDetails | StreamDetails> => {
  console.log(id);
  return new Promise(resolve =>
    setTimeout(
      () =>
        id.includes('Stream')
          ? resolve({
              previewUrl: 'https://i.ytimg.com/vi/ktIgy-yPCkg/maxresdefault.jpg',
              title: 'Live Stream',
              author: '@MaksymStaryk',
              watching: 1200,
            })
          : resolve({
              previewUrl: 'https://i.ytimg.com/vi/3KxZeE9LXZo/sddefault.jpg',
              title: 'Solid principles in React function components',
              author: '@SerhiiStaryk',
            }),
      500
    )
  );
};

export default loadVideoDetails;
