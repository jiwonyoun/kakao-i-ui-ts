import { ChatElement } from './ChatElement.component'
import { ThumbnailElementPropsType } from './Thumbnail.component'
import { ButtonElementPropsType } from './Button.component'

export interface BasicCardElementPropsType {
    title?: string,
    description?: string,
    thumbnail: ChatElement<ThumbnailElementPropsType>,
    buttons?: ChatElement<ButtonElementPropsType>[]
}

export interface BasicCardProp {
    title?: string,
    description?: string,
    thumbnail: ChatElement<ThumbnailElementPropsType>,
    buttons?: ChatElement<ButtonElementPropsType>[]
}

export function BasicCard({ title, description, thumbnail, buttons }: BasicCardProp): ChatElement<BasicCardElementPropsType> {
    return new ChatElement(
        'basicCard',
        {
            title,
            description,
            thumbnail,
            buttons
        }
    )
}
