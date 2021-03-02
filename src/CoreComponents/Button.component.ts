import { ChatElement } from 'chat-element-json-ts';

interface ButtonElementPropsType {
  label: string;
  action: string;
  webLinkUrl?: string;
  messageText?: string;
  phoneNumber?: string;
  blockId?: string;
  extra?: Record<string, any>;
}

export type ButtonType = ChatElement<ButtonElementPropsType>;

export interface ButtonParameter {
  label: string;
  action: 'webLink' | 'message' | 'block' | 'phone';
  webLinkUrl?: string;
  messageText?: string;
  blockId?: string;
  phoneNumber?: string;
  extra?: Record<string, any>;
}

export function Button({
  label,
  action,
  webLinkUrl,
  messageText,
  blockId,
  phoneNumber,
  extra,
}: ButtonParameter): ButtonType {
  return new ChatElement('button', {
    label,
    action,
    webLinkUrl,
    messageText,
    blockId,
    phoneNumber,
    extra,
  });
}
