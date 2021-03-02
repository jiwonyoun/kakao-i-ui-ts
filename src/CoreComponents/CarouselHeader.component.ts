import { ChatElement } from 'chat-element-json-ts';

interface CarouselHeaderElementPropsType {
  title: string;
  description: string;
  thumbnail: {
    imageUrl: string;
  };
}

export type CarouselHeaderType = ChatElement<CarouselHeaderElementPropsType>;

export interface CarouselHeaderParameter {
  title: string;
  description: string;
  imageUrl: string;
}

export function CarouselHeader({ title, description, imageUrl }: CarouselHeaderParameter): CarouselHeaderType {
  return new ChatElement('carouselHeader', {
    title,
    description,
    thumbnail: {
      imageUrl,
    },
  });
}
