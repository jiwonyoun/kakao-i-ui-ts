import { ChatElement } from './ChatElement.component'
import { BasicCardElementPropsType } from './BasicCard.component'

export interface ContentElementPropsType {
    [chatElementName: string]: ChatElement<BasicCardElementPropsType>
}

export interface ContentProp {
    card_or_cards: ChatElement<BasicCardElementPropsType>
}

export function Content({ card_or_cards }: ContentProp): ChatElement<ContentElementPropsType> {
    return new ChatElement(
        'content',
        {
            [card_or_cards.name]: card_or_cards
        }
    )
}