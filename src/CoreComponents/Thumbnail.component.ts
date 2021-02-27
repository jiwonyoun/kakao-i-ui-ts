import { ChatElement } from "../CoreChatElement.component";

export interface ThumbnailElementPropsType {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export type ThumbnailType = ChatElement<ThumbnailElementPropsType>;

export interface ThumbnailParameter {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export function Thumbnail({
  imageUrl,
  fixedRatio = false,
  width,
  height,
}: ThumbnailParameter): ThumbnailType {
  return new ChatElement("thumbnail", <ThumbnailElementPropsType>{
    imageUrl,
    fixedRatio,
    width,
    height,
  });
}
