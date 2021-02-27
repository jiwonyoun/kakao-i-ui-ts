import { ChatElement } from "../CoreChatElement.component";

export interface ButtonElementPropsType {
  label: string;
  action: string;
  webLinkUrl?: string;
  messageText?: string;
  phoneNumber?: string;
  blockId?: string;
  extra?: Record<string, any>;
}

export type ButtonElement = ChatElement<ButtonElementPropsType>;

export interface ButtonParameter {
  label: string;
  action: "webLink" | "message" | "block" | "phone";
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
}: ButtonParameter): ButtonElement {
  return new ChatElement("button", <ButtonElementPropsType>{
    label,
    action,
    webLinkUrl,
    messageText,
    blockId,
    phoneNumber,
    extra,
  });
}
