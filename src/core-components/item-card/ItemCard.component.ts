import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailType, ButtonType } from '..';
import { ItemCardElementName } from '../constants';
import { ItemCardHeadType } from './ItemCardHead.component';
import { ItemCardImageTitleType } from './ItemCardImageTitle.component';
import { ItemCardItemListType } from './ItemCardItemList.component';
import { ItemCardItemListSummaryType } from './ItemCardItemListSummary.component';
import { ItemCardProfileType } from './ItemCardProfile.component';

type ItemListAlignmentType = 'left' | 'right';
type ButtonLayoutType = 'vertical' | 'horizontal';
export type ItemCardPropsType = {
  thunbnail?: ThumbnailType;
  head?: ItemCardHeadType;
  profile?: ItemCardProfileType;
  imageTitle?: ItemCardImageTitleType;
  itemListAlignment?: ItemListAlignmentType;
  itemListSummary?: ItemCardItemListSummaryType;
  itemList: ItemCardItemListType[];
  title?: string;
  description?: string;
  buttons?: ButtonType[];
  buttonLayout?: ButtonLayoutType;
};

export type ItemCardType = ChatElement<typeof ItemCardElementName, ItemCardPropsType>;

export function ItemCard(itemCardProps: ItemCardPropsType): ItemCardType {
  return new ChatElement(ItemCardElementName, itemCardProps);
}
