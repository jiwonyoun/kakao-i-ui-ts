import { ChatElement } from 'chat-element-json-ts';
import { SimpleTextElementName } from './constants';

interface SimpleTextElementPropsType {
  text: string;
}

export type SimpleTextType = ChatElement<typeof SimpleTextElementName, SimpleTextElementPropsType>;

export interface SimpleTextParameter {
  text: string;
}

export function SimpleText({ text }: SimpleTextParameter): SimpleTextType {
  return new ChatElement(SimpleTextElementName, {
    text,
  });
}
