import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType } from './Thumbnail.component';
import { ButtonType } from './Button.component';
import { CommerceCardElementName } from './constants';
import { ProfileType } from './Profile.component';

export type CommerceCardElementPropsType = {
  description: string;
  price: number;
  currency: 'won';
  discount?: number;
  discountRate?: number;
  discountedPrice?: number;
  thumbnails: ThumbnailType[];
  profile?: ProfileType;
  buttons: ButtonType[];
};

export type CommerceCardType = ChatElement<typeof CommerceCardElementName, CommerceCardElementPropsType>;

export function CommerceCard(commerceCardProps: CommerceCardElementPropsType): CommerceCardType {
  return new ChatElement(CommerceCardElementName, commerceCardProps);
}
