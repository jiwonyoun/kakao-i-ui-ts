import { ChatElement } from 'chat-element-json-ts';
import { ButtonElementName } from './constants';

export type ButtonType = ChatElement<typeof ButtonElementName, ButtonElementPropsType>;

export class ButtonElementPropsType {
  label: string;
  action: 'webLink' | 'message' | 'block' | 'phone';
  webLinkUrl?: string;
  messageText?: string;
  blockId?: string;
  phoneNumber?: string;
  extra?: Record<string, any>;
}

export function Button(buttonProps: ButtonElementPropsType): ButtonType {
  return new ChatElement(ButtonElementName, buttonProps);
}
