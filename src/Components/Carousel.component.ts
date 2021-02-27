import { ChatElement } from "../CoreChatElement.component";
import { BasicCardElement } from "./BasicCard.component";
import { CommerceCardElement } from "./CommerceCard.component";
import { CarouselHeaderElement } from "./CarouselHeader.component";

export interface CarouselElementPropsType {
  type: string;
  items: BasicCardElement[] | CommerceCardElement[];
  header: CarouselHeaderElement;
}
export type CarouselElement = ChatElement<CarouselElementPropsType>;

export interface CarouselParameter {
  pagination: {
    current_page_no: number;
    pagination_page_size: number;
    has_next_page_items: boolean;
    has_previous_page_items: boolean;
  };
  cardType: "basicCard" | "commerceCard";
  items: BasicCardElement[] | CommerceCardElement[];
  header: CarouselHeaderElement;
}

export function Carousel({
  pagination: {
    current_page_no,
    pagination_page_size,
    has_next_page_items,
    has_previous_page_items,
  },
  cardType,
  items,
  header,
}: CarouselParameter): CarouselElement {
  return new ChatElement("carousel", <CarouselElementPropsType>{
    type: cardType,
    items,
    header,
  });
}
