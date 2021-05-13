import { ChatElement } from 'chat-element-json-ts';
import { CarouselComponentName } from './constants';

interface CarouselHeaderElementPropsType {
  title: string;
  description: string;
  thumbnail: {
    imageUrl: string;
  };
}

export type CarouselHeaderType = ChatElement<typeof CarouselComponentName, CarouselHeaderElementPropsType>;

export interface CarouselHeaderParameter {
  title: string;
  description: string;
  imageUrl: string;
}

export function CarouselHeader({ title, description, imageUrl }: CarouselHeaderParameter): CarouselHeaderType {
  return new ChatElement(CarouselComponentName, {
    title,
    description,
    thumbnail: {
      imageUrl,
    },
  });
}
