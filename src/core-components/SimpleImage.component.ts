import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { SimpleImageElementName } from './constants';

export class SimpleImageElementPropsType {
  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  altText: string;
}

export type SimpleImageType = ChatElement<typeof SimpleImageElementName, SimpleImageElementPropsType>;

export function SimpleImage(simpleImageProps: SimpleImageElementPropsType): SimpleImageType {
  return new ChatElement(SimpleImageElementName, simpleImageProps);
}
