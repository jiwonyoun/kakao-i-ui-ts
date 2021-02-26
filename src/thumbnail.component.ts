import { ChatElement } from './ChatElement.component'

export interface ThumbnailElementPropsType {
    imageUrl: string,
    fixedRatio?: boolean,
    width: number,
    height: number
}

export interface ThumbnailProp {
    imageUrl: string,
    fixedRatio?: boolean,
    width: number,
    height: number
}

export function Thumbnail({ imageUrl, fixedRatio = false, width, height }: ThumbnailProp): ChatElement<ThumbnailElementPropsType> {
    return new ChatElement(
        'thumbnail',
        {
            imageUrl,
            fixedRatio,
            width,
            height
        }
    )
}