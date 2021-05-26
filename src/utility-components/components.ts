import {
  Carousel,
  CarouselHeaderType,
  CarouselItemsType,
  CarouselType,
  Content,
  Output,
  OutputType,
  QuickReplyType,
  SkillResponse,
  SkillResponseType,
  SkillTemplate,
} from '../core-components';
import { BasicCardElementName } from '../core-components/constants';

type OutputOrContent = OutputType | Content;

export type ChatResponseProps = {
  chats: OutputOrContent[];
  quickReplies?: QuickReplyType[];
};

/**
 * Content 1개를 받아 Output 1개를 쉽게 생성해주는 함수
 * @param content
 * @returns
 */
export function OutputFactory(content: Content): OutputType {
  return Output({
    [content.name]: content,
  });
}

/**
 * SkillResponse를 생성해주는 헬퍼 함수. Content 배열과 QuickReply 배열을 인자로 받아 완전한 챗봇 응답 데이터를 생성함.
 * @param ChatResponseProps
 * @returns
 */
export function ChatResponse({ chats, quickReplies }: ChatResponseProps): SkillResponseType {
  return SkillResponse({
    version: '2.0',
    template: SkillTemplate({
      outputs: chats.map((chat: OutputOrContent) => {
        if (chat.name === 'output') {
          return chat;
        }
        return OutputFactory(chat);
      }),
      quickReplies,
    }),
  });
}

/**
 * Carousel을 생성해주는 헬퍼 함수. CarouselItemsType을 인자로 받아 Carousel 객체를 알아서 생성함.
 * @param items 캐로셀에 들어갈 요소들
 * @param carouselHeader CarouselHeader
 * @returns
 */
export function CarouselFactory(items: CarouselItemsType, carouselHeader?: CarouselHeaderType): CarouselType {
  if (items.length === 0) {
    return Carousel({
      type: BasicCardElementName,
      items,
      header: carouselHeader,
    });
  }
  return Carousel({
    type: items[0].name,
    items,
    header: carouselHeader,
  });
}
