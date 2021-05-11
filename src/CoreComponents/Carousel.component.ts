import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';

interface CarouselElementPropsType {
  type: string;
  items: BasicCardType[] | CommerceCardType[];
  header?: CarouselHeaderType;
}
export type CarouselType = ChatElement<CarouselElementPropsType>;

export interface CarouselParameter {
  cardType: 'basicCard' | 'commerceCard';
  items: BasicCardType[] | CommerceCardType[];
  header?: CarouselHeaderType;
}

export function Carousel({ cardType, items, header }: CarouselParameter): CarouselType {
  return new ChatElement('carousel', {
    type: cardType,
    items,
    header,
  });
}
