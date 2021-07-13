import { ChatElement } from 'chat-element-json-ts';
import { ItemCardItemListSummaryElementName } from '../constants';

export type ItemCardItemListSummaryPropsType = {
  title: string;
  description: string;
};

export type ItemCardItemListSummaryType = ChatElement<
  typeof ItemCardItemListSummaryElementName,
  ItemCardItemListSummaryPropsType
>;

export function ItemCardItemListSummary(
  itemCardItemListSummaryProps: ItemCardItemListSummaryPropsType,
): ItemCardItemListSummaryType {
  return new ChatElement(
    ItemCardItemListSummaryElementName,
    itemCardItemListSummaryProps,
  );
}
