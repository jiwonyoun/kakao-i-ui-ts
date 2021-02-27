import { ChatElement } from "../CoreChatElement.component";

export interface SimpleImageElementPropsType {
  imageUrl: string;
  altText: string;
}

export type SimpleImageElement = ChatElement<SimpleImageElementPropsType>;

export interface SimpleImageParameter {
  imageUrl: string;
  altText: string;
}

export function SimpleImage({
  imageUrl,
  altText,
}: SimpleImageParameter): SimpleImageElement {
  return new ChatElement("simpleImage", <SimpleImageElementPropsType>{
    imageUrl,
    altText,
  });
}
