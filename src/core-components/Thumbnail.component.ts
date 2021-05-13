import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailComponentName } from './constants';

interface ThumbnailElementPropsType {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export type ThumbnailType = ChatElement<typeof ThumbnailComponentName, ThumbnailElementPropsType>;

export interface ThumbnailParameter {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export function Thumbnail({ imageUrl, fixedRatio = false, width, height }: ThumbnailParameter): ThumbnailType {
  return new ChatElement(ThumbnailComponentName, {
    imageUrl,
    fixedRatio,
    width,
    height,
  });
}
