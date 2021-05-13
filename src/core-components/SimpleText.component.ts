import { ChatElement } from 'chat-element-json-ts';
import { SimpleImageComponentName } from './constants';

interface SimpleTextElementPropsType {
  text: string;
}

export type SimpleTextType = ChatElement<typeof SimpleImageComponentName, SimpleTextElementPropsType>;

export interface SimpleTextParameter {
  text: string;
}

export function SimpleText({ text }: SimpleTextParameter): SimpleTextType {
  return new ChatElement(SimpleImageComponentName, {
    text,
  });
}
