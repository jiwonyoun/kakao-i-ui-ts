import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { BasicCardElementName } from './constants';

interface BasicCardElementPropsType {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export type BasicCardType = ChatElement<typeof BasicCardElementName, BasicCardElementPropsType>;

export interface BasicCardParameter {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export function BasicCard({ title, description, thumbnail, buttons }: BasicCardParameter): BasicCardType {
  return new ChatElement(BasicCardElementName, {
    title,
    description,
    thumbnail,
    buttons,
  });
}
