import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';
import { BasicCardComponentName, CarouselComponentName, CommerceCardComponentName } from './constants';

export type CarouselItemsType = BasicCardType[] | CommerceCardType[];
export type CarouseCardType = typeof BasicCardComponentName | typeof CommerceCardComponentName;

interface CarouselElementPropsType {
  type: CarouseCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
}
export type CarouselType = ChatElement<typeof CarouselComponentName, CarouselElementPropsType>;


export interface CarouselParameter {
  cardType: CarouseCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
}

export function Carousel({ cardType, items, header }: CarouselParameter): CarouselType {
  return new ChatElement(CarouselComponentName, {
    type: cardType,
    items,
    header,
  });
}
