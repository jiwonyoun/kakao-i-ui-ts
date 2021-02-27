import { ChatElement } from '../CoreChatElement.component';

export interface SimpleTextElementPropsType {
  text: string;
}

export type SimpleTextType = ChatElement<SimpleTextElementPropsType>;

export interface SimpleTextParameter {
  text: string;
}

export function SimpleText({ text }: SimpleTextParameter): SimpleTextType {
  return new ChatElement('simpleText', {
    text,
  } as SimpleTextElementPropsType);
}
