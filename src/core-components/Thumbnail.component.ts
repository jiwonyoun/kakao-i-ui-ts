import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailElementName } from './constants';

export type ThumbnailElementPropsType = {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
};

export type ThumbnailType = ChatElement<typeof ThumbnailElementName, ThumbnailElementPropsType>;

export function Thumbnail(thumbnailProps: ThumbnailElementPropsType): ThumbnailType {
  return new ChatElement(ThumbnailElementName, thumbnailProps);
}
