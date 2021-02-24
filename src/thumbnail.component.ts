import { KIV2Link } from './link.component'

export interface KIV2Thumbnail {
    imageUrl: string;
    link?: KIV2Link;
    fixedRatio?: boolean;
    width: number;
    height: number
}
