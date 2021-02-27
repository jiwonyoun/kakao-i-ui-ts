import { ChatElement } from "../CoreChatElement.component";

export interface SimpleTextElementPropsType {
  text: string;
}

export type SimpleTextElement = ChatElement<SimpleTextElementPropsType>;

export interface SimpleTextParameter {
  text: string;
}

export function SimpleText({ text }: SimpleTextParameter): SimpleTextElement {
  return new ChatElement("simpleText", <SimpleTextElementPropsType>{
    text,
  });
}
