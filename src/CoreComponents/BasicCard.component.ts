import { ChatElement } from '../CoreChatElement.component';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';

export interface BasicCardElementPropsType {
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

export function BasicCard({
  title,
  description,
  thumbnail,
  buttons,
}: BasicCardParameter): ChatElement<BasicCardElementPropsType> {
  return new ChatElement('basicCard', {
    title,
    description,
    thumbnail,
    buttons,
  } as BasicCardElementPropsType);
}
