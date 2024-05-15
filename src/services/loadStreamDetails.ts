import { StreamDetails } from '../types/StreamDetails';

const loadStreamDetails = (id: string): Promise<StreamDetails> =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          previewUrl: 'https://i.ytimg.com/vi/ktIgy-yPCkg/maxresdefault.jpg',
          title: 'Live Stream',
          author: '@MaksymStaryk',
          watching: 1200,
        }),
      500
    )
  );

export default loadStreamDetails;
