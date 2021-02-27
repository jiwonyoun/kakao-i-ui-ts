import { ChatElement } from "../CoreChatElement.component";
import { ThumbnailElement } from "./Thumbnail.component";
import { ButtonElement } from "./Button.component";

export interface CommerceCardElementPropsType {
  description: string;
  price: number;
  currency: string;
  discount?: number;
  discountRate?: number;
  discountedPrice?: number;
  thumbnails: ThumbnailElement[];
  buttons: ButtonElement[];
}

export type CommerceCardElement = ChatElement<CommerceCardElementPropsType>;

export interface CommerceCardParameter {
  description: string;
  price: number;
  currency: string;
  discount?: number;
  discountRate?: number;
  discountedPrice?: number;
  thumbnails: ThumbnailElement[];
  buttons: ButtonElement[];
}

export function CommerceCard({
  description,
  price,
  currency,
  discount,
  discountRate,
  discountedPrice,
  thumbnails,
  buttons,
}: CommerceCardParameter): CommerceCardElement {
  return new ChatElement("commerceCard", <CommerceCardElementPropsType>{
    description,
    price,
    currency,
    discount,
    discountRate,
    discountedPrice,
    thumbnails,
    buttons,
  });
}
