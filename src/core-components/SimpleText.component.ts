import { ChatElement } from 'chat-element-json-ts';
import { SimpleTextElementName } from './constants';

export type SimpleTextElementPropsType = {
  text: string;
};

export type SimpleTextType = ChatElement<typeof SimpleTextElementName, SimpleTextElementPropsType>;

export function SimpleText(simpleTextProps: SimpleTextElementPropsType): SimpleTextType {
  return new ChatElement(SimpleTextElementName, simpleTextProps);
}
