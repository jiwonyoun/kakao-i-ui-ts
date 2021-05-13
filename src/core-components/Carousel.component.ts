import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';
import { BasicCardElementName, CarouselElementName, CommerceCardElementName } from './constants';

export type CarouselItemsType = BasicCardType[] | CommerceCardType[];
export type CarouseCardType = typeof BasicCardElementName | typeof CommerceCardElementName;

interface CarouselElementPropsType {
  type: CarouseCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
}
export type CarouselType = ChatElement<typeof CarouselElementName, CarouselElementPropsType>;

export interface CarouselParameter {
  cardType: CarouseCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
}

export function Carousel({ cardType, items, header }: CarouselParameter): CarouselType {
  return new ChatElement(CarouselElementName, {
    type: cardType,
    items,
    header,
  });
}
