import { ChatElement } from "../CoreChatElement.component";
import { ThumbnailElement } from "./Thumbnail.component";
import { ButtonElement } from "./Button.component";

export interface BasicCardElementPropsType {
  title?: string;
  description?: string;
  thumbnail: ThumbnailElement;
  buttons?: ButtonElement[];
}

export interface BasicCardParameter {
  title?: string;
  description?: string;
  thumbnail: ThumbnailElement;
  buttons?: ButtonElement[];
}

export function BasicCard({
  title,
  description,
  thumbnail,
  buttons,
}: BasicCardParameter): ChatElement<BasicCardElementPropsType> {
  return new ChatElement("basicCard", <BasicCardElementPropsType>{
    title,
    description,
    thumbnail,
    buttons,
  });
}

export type BasicCardElement = ChatElement<BasicCardElementPropsType>;
