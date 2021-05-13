import { ChatElement } from 'chat-element-json-ts';
import { SimpleImageElementName } from './constants';

interface SimpleImageElementPropsType {
  imageUrl: string;
  altText: string;
}

export type SimpleImageType = ChatElement<typeof SimpleImageElementName, SimpleImageElementPropsType>;

export interface SimpleImageParameter {
  imageUrl: string;
  altText: string;
}

export function SimpleImage({ imageUrl, altText }: SimpleImageParameter): SimpleImageType {
  return new ChatElement(SimpleImageElementName, {
    imageUrl,
    altText,
  });
}
