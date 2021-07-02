import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';
import { BasicCardElementName, CarouselElementName, CommerceCardElementName } from './constants';
import { ArrayOfChatElements } from '..';

export type DefaultCarouselCardType = typeof BasicCardElementName | typeof CommerceCardElementName;
export type DefaultCarouselItemsType = ArrayOfChatElements<BasicCardType | CommerceCardType>;

export type CarouselElementPropsType<CarouselCardType, CarouselItemsType> = {
  type: CarouselCardType;
  items: CarouselItemsType;
  header?: CarouselHeaderType;
};
export type CarouselType<
  CarouselCardType = DefaultCarouselCardType,
  CarouselItemsType = DefaultCarouselItemsType
> = ChatElement<typeof CarouselElementName, CarouselElementPropsType<CarouselCardType, CarouselItemsType>>;

export function Carousel<CarouselCardType = DefaultCarouselCardType, CarouselItemsType = DefaultCarouselItemsType>(
  carouselElementPropsType: CarouselElementPropsType<CarouselCardType, CarouselItemsType>,
): CarouselType<CarouselCardType, CarouselItemsType> {
  return new ChatElement(CarouselElementName, carouselElementPropsType);
}
