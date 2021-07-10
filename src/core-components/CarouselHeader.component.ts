import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { CarouselElementName } from './constants';

export class CarouselHeaderElementPropsType {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: {
    imageUrl: string;
  };
}

export type CarouselHeaderType = ChatElement<typeof CarouselElementName, CarouselHeaderElementPropsType>;

export function CarouselHeader(carouselHeaderElementPropsType: CarouselHeaderElementPropsType): CarouselHeaderType {
  return new ChatElement(CarouselElementName, carouselHeaderElementPropsType);
}
