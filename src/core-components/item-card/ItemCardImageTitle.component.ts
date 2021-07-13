import { ChatElement } from 'chat-element-json-ts';
import { ItemCardImageTitleElementName } from '../constants';

export type ItemCardImageTitlePropsType = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export type ItemCardImageTitleType = ChatElement<typeof ItemCardImageTitleElementName, ItemCardImageTitlePropsType>;

export function ItemCardImageTitle(itemCardImageTitleProps: ItemCardImageTitlePropsType): ItemCardImageTitleType {
  return new ChatElement(ItemCardImageTitleElementName, itemCardImageTitleProps);
}
