import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';
import { BasicCardElementName, CarouselElementName, CommerceCardElementName } from './constants';
import { ArrayOfChatElements } from '..';
import { ApiProperty } from '@nestjs/swagger';

export type DefaultCarouselCardType = typeof BasicCardElementName | typeof CommerceCardElementName;
export type DefaultCarouselItemType = BasicCardType | CommerceCardType;
export type DefaultCarouselItemArrayType = ArrayOfChatElements<DefaultCarouselItemType>;

export class CarouselElementPropsType<CarouselCardType, CarouselItemsType extends ArrayOfChatElements> {
  @ApiProperty()
  type: CarouselCardType;

  @ApiProperty()
  items: CarouselItemsType;

  @ApiProperty()
  header?: CarouselHeaderType;
}
export type CarouselType<
  CarouselCardType = DefaultCarouselCardType,
  CarouselItemsType extends ArrayOfChatElements = DefaultCarouselItemArrayType
> = ChatElement<typeof CarouselElementName, CarouselElementPropsType<CarouselCardType, CarouselItemsType>>;

export function Carousel<
  CarouselCardType = DefaultCarouselCardType,
  CarouselItemsType extends ArrayOfChatElements = DefaultCarouselItemArrayType
>(
  carouselElementPropsType: CarouselElementPropsType<CarouselCardType, CarouselItemsType>,
): CarouselType<CarouselCardType, CarouselItemsType> {
  return new ChatElement(CarouselElementName, carouselElementPropsType);
}
