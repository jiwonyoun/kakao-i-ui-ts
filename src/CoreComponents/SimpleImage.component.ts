import { ChatElement } from '../CoreChatElement.component';

export interface SimpleImageElementPropsType {
  imageUrl: string;
  altText: string;
}

export type SimpleImageType = ChatElement<SimpleImageElementPropsType>;

export interface SimpleImageParameter {
  imageUrl: string;
  altText: string;
}

export function SimpleImage({ imageUrl, altText }: SimpleImageParameter): SimpleImageType {
  return new ChatElement('simpleImage', {
    imageUrl,
    altText,
  } as SimpleImageElementPropsType);
}
