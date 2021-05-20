import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CarouselType } from './Carousel.component';
import { CommerceCardType } from './CommerceCard.component';
import { OutputElementName } from './constants';
import { SimpleImageType } from './SimpleImage.component';
import { SimpleTextType } from './SimpleText.component';

export type Content = BasicCardType | CommerceCardType | CarouselType | SimpleTextType | SimpleImageType;

export type OutputElementPropsType = {
  [chatElementName: string]: Content;
};

export type OutputType = ChatElement<typeof OutputElementName, OutputElementPropsType>;


export function Output(outputProps: OutputElementPropsType): OutputType {
  return new ChatElement(OutputElementName, outputProps);
}
