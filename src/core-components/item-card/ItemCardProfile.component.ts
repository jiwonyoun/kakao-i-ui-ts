import { ChatElement } from 'chat-element-json-ts';
import { ItemCardProfileElementName } from '../constants';
import { ItemCardImageTitlePropsType } from './ItemCardImageTitle.component';

export type ItemCardProfilePropsType = {
  imageUrl: string;
  width?: number;
  height?: number;
  title: string;
};

export type ItemCardProfileType = ChatElement<
  typeof ItemCardProfileElementName,
  ItemCardImageTitlePropsType
>;

export function ItemCardProfile(
  itemCardProfileProps: ItemCardProfilePropsType,
): ItemCardProfileType {
  return new ChatElement(ItemCardProfileElementName, itemCardProfileProps);
}
