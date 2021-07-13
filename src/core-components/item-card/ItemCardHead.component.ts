import { ChatElement } from 'chat-element-json-ts';
import { ItemCardHeadElementName } from '../constants';

export type ItemCardHeadPropsType = {
  title: string;
};

export type ItemCardHeadType = ChatElement<typeof ItemCardHeadElementName, ItemCardHeadPropsType>;

export function ItemCardHead(itemCardHeadProps: ItemCardHeadPropsType): ItemCardHeadType {
  return new ChatElement(ItemCardHeadElementName, itemCardHeadProps);
}
