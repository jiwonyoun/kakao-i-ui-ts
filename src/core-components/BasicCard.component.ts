import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { BasicCardElementName } from './constants';
import { ApiProperty } from '@nestjs/swagger';

export class BasicCardElementPropsType {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  thumbnail?: ThumbnailType;

  @ApiProperty()
  buttons?: ButtonType[];
}

export type BasicCardType = ChatElement<typeof BasicCardElementName, BasicCardElementPropsType>;

export function BasicCard(basicCardProps: BasicCardElementPropsType): BasicCardType {
  return new ChatElement(BasicCardElementName, basicCardProps);
}
