import { ChatElement } from 'chat-element-json-ts';
import { BasicCardType } from './BasicCard.component';
import { CarouselType } from './Carousel.component';
import { CommerceCardType } from './CommerceCard.component';
import { OutputElementName } from './constants';
import { SimpleImageType } from './SimpleImage.component';
import { SimpleTextType } from './SimpleText.component';

export type DefaultContentType = BasicCardType | CommerceCardType | CarouselType | SimpleTextType | SimpleImageType;

export class OutputElementPropsType<AllowedContentType> {
  [chatElementName: string]: AllowedContentType;
}

export type OutputType<AllowedContentType> = ChatElement<
  typeof OutputElementName,
  OutputElementPropsType<AllowedContentType>
>;

export function Output<AllowedContentType = DefaultContentType>(
  outputProps: OutputElementPropsType<AllowedContentType>,
): OutputType<AllowedContentType> {
  return new ChatElement(OutputElementName, outputProps);
}
