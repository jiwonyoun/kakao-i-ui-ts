import { ApiProperty } from '@nestjs/swagger';
import { ChatElement } from 'chat-element-json-ts';
import { ThumbnailElementName } from './constants';

export class ThumbnailElementPropsType {
  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  fixedRatio?: boolean;

  @ApiProperty()
  width?: number;

  @ApiProperty()
  height?: number;
}

export type ThumbnailType = ChatElement<typeof ThumbnailElementName, ThumbnailElementPropsType>;

export function Thumbnail(thumbnailProps: ThumbnailElementPropsType): ThumbnailType {
  return new ChatElement(ThumbnailElementName, thumbnailProps);
}
