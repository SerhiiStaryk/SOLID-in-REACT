import { VideoDetails } from './VideoDetails';

export type VideoPreviewProps<T extends VideoDetails> = {
  videoId: string;
  ImagePreviewComponent?: React.FunctionComponent<{ videoDetails: T }>;
  DescriptionComponent?: React.FunctionComponent<{ videoDetails: T }>;
  LoaderComponent?: React.FunctionComponent<{}>;
};
