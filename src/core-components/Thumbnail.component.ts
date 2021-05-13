import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailElementName } from './constants';

interface ThumbnailElementPropsType {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export type ThumbnailType = ChatElement<typeof ThumbnailElementName, ThumbnailElementPropsType>;

export interface ThumbnailParameter {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export function Thumbnail({ imageUrl, fixedRatio = false, width, height }: ThumbnailParameter): ThumbnailType {
  return new ChatElement(ThumbnailElementName, {
    imageUrl,
    fixedRatio,
    width,
    height,
  });
}
