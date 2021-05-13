import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { BasicCardComponentName } from './constants';

interface BasicCardElementPropsType {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export type BasicCardType = ChatElement<typeof BasicCardComponentName, BasicCardElementPropsType>;

export interface BasicCardParameter {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export function BasicCard({ title, description, thumbnail, buttons }: BasicCardParameter): BasicCardType {
  return new ChatElement(BasicCardComponentName, {
    title,
    description,
    thumbnail,
    buttons,
  });
}
