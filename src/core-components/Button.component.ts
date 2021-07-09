import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { ButtonElementName } from './constants';

export type ButtonType = ChatElement<typeof ButtonElementName, ButtonElementPropsType>;

export class ButtonElementPropsType {
  @ApiProperty()
  label: string;

  @ApiProperty()
  action: 'webLink' | 'message' | 'block' | 'phone';

  @ApiProperty()
  webLinkUrl?: string;

  @ApiProperty()
  messageText?: string;

  @ApiProperty()
  blockId?: string;

  @ApiProperty()
  phoneNumber?: string;

  @ApiProperty()
  extra?: Record<string, any>;
}

export function Button(buttonProps: ButtonElementPropsType): ButtonType {
  return new ChatElement(ButtonElementName, buttonProps);
}
