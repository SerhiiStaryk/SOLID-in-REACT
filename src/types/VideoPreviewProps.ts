import useVideoDetails from '../hooks/useVideoDetails';
import { VideoDetails } from './VideoDetails';

export type VideoPreviewProps = {
  videoId: string;
  videoDetailsGetter?: typeof useVideoDetails;
  ImagePreviewComponent?: React.FunctionComponent<{ videoDetails: VideoDetails }>;
  DescriptionComponent?: React.FunctionComponent<{ videoDetails: VideoDetails }>;
  LoaderComponent?: React.FunctionComponent<{}>
};
