import { VideoDetails } from '../types/VideoDetails';

const loadVideoDetails = (id: string): Promise<VideoDetails> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        previewUrl: 'https://i.ytimg.com/vi/3KxZeE9LXZo/sddefault.jpg',
        title: 'Solid principles in React function components',
        author: '@SerhiiStaryk',
      });
    }, 500);
  });

export default loadVideoDetails;
