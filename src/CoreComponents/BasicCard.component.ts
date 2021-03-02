import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';

interface BasicCardElementPropsType {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export type BasicCardType = ChatElement<BasicCardElementPropsType>;

export interface BasicCardParameter {
  title?: string;
  description?: string;
  thumbnail: ThumbnailType;
  buttons?: ButtonType[];
}

export function BasicCard({ title, description, thumbnail, buttons }: BasicCardParameter): BasicCardType {
  return new ChatElement('basicCard', {
    title,
    description,
    thumbnail,
    buttons,
  });
}
