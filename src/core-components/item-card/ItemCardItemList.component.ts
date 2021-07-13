import { ChatElement } from 'chat-element-json-ts';
import { ItemCardItemListElementName } from '../constants';

export type ItemCardItemListPropsType = {
  title: string;
  description: string;
};

export type ItemCardItemListType = ChatElement<typeof ItemCardItemListElementName, ItemCardItemListPropsType>;

export function ItemCardItemList(itemCardListItemProps: ItemCardItemListPropsType): ItemCardItemListType {
  return new ChatElement(ItemCardItemListElementName, itemCardListItemProps);
}
