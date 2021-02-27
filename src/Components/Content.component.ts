import { ChatElement } from "../CoreChatElement.component";
import { BasicCardElement } from "./BasicCard.component";

export interface ContentElementPropsType {
  [chatElementName: string]: BasicCardElement;
}

export type ContentElement = ChatElement<ContentElementPropsType>;

export interface ContentParameter {
  card_or_cards: BasicCardElement;
}

export function Content({ card_or_cards }: ContentParameter): ContentElement {
  return new ChatElement("content", <ContentElementPropsType>{
    [card_or_cards.name]: card_or_cards,
  });
}
