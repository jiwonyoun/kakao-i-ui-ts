import { ChatElement } from 'chat-element-json-ts';
import { SimpleImageComponentName } from './constants';

interface SimpleImageElementPropsType {
  imageUrl: string;
  altText: string;
}

export type SimpleImageType = ChatElement<typeof SimpleImageComponentName, SimpleImageElementPropsType>;

export interface SimpleImageParameter {
  imageUrl: string;
  altText: string;
}

export function SimpleImage({ imageUrl, altText }: SimpleImageParameter): SimpleImageType {
  return new ChatElement(SimpleImageComponentName, {
    imageUrl,
    altText,
  });
}
