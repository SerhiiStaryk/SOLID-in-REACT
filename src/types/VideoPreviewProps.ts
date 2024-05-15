import { VideoDetails } from './VideoDetails';

export type VideoPreviewProps<T extends VideoDetails> = {
  videoId: string;
  renderImagePreview?: (video: T) => React.ReactElement;
  renderDescription?: (video: T) => React.ReactElement;
  LoaderComponent?: React.FunctionComponent<{}>;
};
