import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { QuickReplyElementName } from './constants';

export class QuickReplyElementPropsType {
  @ApiProperty()
  label: string;

  @ApiProperty()
  action: 'message' | 'block';
  
  @ApiProperty()
  messageText?: string;

  @ApiProperty()
  blockId?: string;

  @ApiProperty()
  extra?: Record<string, any>;
}

export type QuickReplyType = ChatElement<typeof QuickReplyElementName, QuickReplyElementPropsType>;

export function QuickReply(quickReplyProps: QuickReplyElementPropsType): QuickReplyType {
  return new ChatElement(QuickReplyElementName, quickReplyProps);
}
