import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { BasicCardElementName } from './constants';

export class BasicCardElementPropsType {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export type BasicCardType = ChatElement<typeof BasicCardElementName, BasicCardElementPropsType>;

export function BasicCard(basicCardProps: BasicCardElementPropsType): BasicCardType {
  return new ChatElement(BasicCardElementName, basicCardProps);
}
