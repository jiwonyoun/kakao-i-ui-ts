import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { ProfileElementName } from './constants';

export class ProfileElementPropsType {
  @ApiProperty()
  nickname: string;

  @ApiProperty()
  imageUrl: string;
}

export type ProfileType = ChatElement<typeof ProfileElementName, ProfileElementPropsType>;

export function Profile(profileProps: ProfileElementPropsType): ProfileType {
  return new ChatElement(ProfileElementName, profileProps);
}
