import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { CommerceCardElementName } from './constants';
import { ProfileType } from './Profile.component';
import { ApiProperty } from '@nestjs/swagger';

export class CommerceCardElementPropsType {
  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  currency: 'won';

  @ApiProperty()
  discount?: number;

  @ApiProperty()
  discountRate?: number;

  @ApiProperty()
  discountedPrice?: number;

  @ApiProperty()
  thumbnails: ThumbnailType[];

  @ApiProperty()
  profile?: ProfileType;

  @ApiProperty()
  buttons: ButtonType[];
}

export type CommerceCardType = ChatElement<typeof CommerceCardElementName, CommerceCardElementPropsType>;

export function CommerceCard(commerceCardProps: CommerceCardElementPropsType): CommerceCardType {
  return new ChatElement(CommerceCardElementName, commerceCardProps);
}
