import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CarouselType } from './Carousel.component';
import { CommerceCardType } from './CommerceCard.component';
import { OutputComponentName } from './constants';
import { SimpleImageType } from './SimpleImage.component';
import { SimpleTextType } from './SimpleText.component';

export type Content = BasicCardType | CommerceCardType | CarouselType | SimpleTextType | SimpleImageType;

interface OutputElementPropsType {
  [chatElementName: string]: Content;
}

export type OutputType = ChatElement<typeof OutputComponentName, OutputElementPropsType>;

export interface OutputParameter {
  content: Content;
}

export function Output({ content }: OutputParameter): OutputType {
  return new ChatElement(OutputComponentName, {
    [content.name]: content,
  });
}