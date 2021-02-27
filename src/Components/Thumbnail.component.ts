import { ChatElement } from "../CoreChatElement.component";

export interface ThumbnailElementPropsType {
  imageUrl: string;
  fixedRatio?: boolean;
  width: number;
  height: number;
}

export type ThumbnailElement = ChatElement<ThumbnailElementPropsType>;

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
}: ThumbnailParameter): ThumbnailElement {
  return new ChatElement("thumbnail", <ThumbnailElementPropsType>{
    imageUrl,
    fixedRatio,
    width,
    height,
  });
}
