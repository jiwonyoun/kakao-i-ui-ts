import { ChatElement } from 'chat-element-json-ts';
import { QuickReplyElementName } from './constants';

export type QuickReplyElementPropsType = {
  label: string;
  action: 'message' | 'block';
  messageText: string;
  blockId?: string;
  extra?: Record<string, any>;
};

export type QuickReplyType = ChatElement<typeof QuickReplyElementName, QuickReplyElementPropsType>;

export function QuickReply(quickReplyProps: QuickReplyElementPropsType): QuickReplyType {
  return new ChatElement(QuickReplyElementName, quickReplyProps);
}
