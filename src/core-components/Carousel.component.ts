import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';
import { BasicCardElementName, CarouselElementName, CommerceCardElementName } from './constants';

export type CarouselItemsType = BasicCardType[] | CommerceCardType[];
export type CarouseCardType = typeof BasicCardElementName | typeof CommerceCardElementName;

export type CarouselElementPropsType = {
  type: CarouseCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
};
export type CarouselType = ChatElement<typeof CarouselElementName, CarouselElementPropsType>;

export function Carousel(carouselElementPropsType: CarouselElementPropsType): CarouselType {
  return new ChatElement(CarouselElementName, carouselElementPropsType);
}
