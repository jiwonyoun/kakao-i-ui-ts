import { ChatElement } from 'chat-element-json-ts';
import { QuickReplyComponentName } from './constants';

interface QuickReplyElementPropsType {
  label: string;
  action: string;
  messageText: string;
  blockId: string;
  extra?: Record<string, any>;
}

export type QuickReplyType = ChatElement<typeof QuickReplyComponentName, QuickReplyElementPropsType>;

export interface QuickReplyParameter {
  label: string;
  action: 'message' | 'block';
  messageText: string;
  blockId: string;
  extra: Record<string, any>;
}

export function QuickReply({ label, action, messageText, blockId, extra }: QuickReplyParameter): QuickReplyType {
  return new ChatElement(QuickReplyComponentName, {
    label,
    action,
    messageText,
    blockId,
    extra,
  });
}
