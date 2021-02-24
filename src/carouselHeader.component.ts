import { KIV2Thumbnail } from "./thumbnail.component";

export interface KIV2CarouselHeader {
    title: string;
    description: string;
    thumbnail: KIV2Thumbnail
}

export function CarouselHeader(title: string, description: string, thumbnail: KIV2Thumbnail): KIV2CarouselHeader {
    return {
        title,
        description,
        thumbnail
    }
}
