import { ChatElement } from '../CoreChatElement.component';
import { BasicCardType } from './BasicCard.component';
import { CommerceCardType } from './CommerceCard.component';
import { CarouselHeaderType } from './CarouselHeader.component';

export interface CarouselElementPropsType {
  type: string;
  items: BasicCardType[] | CommerceCardType[];
  header: CarouselHeaderType;
}
export type CarouselType = ChatElement<CarouselElementPropsType>;

export interface CarouselParameter {
  pagination: {
    current_page_no: number;
    pagination_page_size: number;
    has_next_page_items: boolean;
    has_previous_page_items: boolean;
  };
  cardType: 'basicCard' | 'commerceCard';
  items: BasicCardType[] | CommerceCardType[];
  header: CarouselHeaderType;
}

export function Carousel({
  pagination: { current_page_no, pagination_page_size, has_next_page_items, has_previous_page_items },
  cardType,
  items,
  header,
}: CarouselParameter): CarouselType {
  return new ChatElement('carousel', {
    type: cardType,
    items,
    header,
  } as CarouselElementPropsType);
}
