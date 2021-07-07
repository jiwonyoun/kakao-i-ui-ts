import {
  BasicCard,
  Button,
  CarouselFactory,
  DefaultContentType,
  Output,
  SimpleText,
  SkillResponse,
  SkillResponseFactory,
  SkillResponseType,
  SkillTemplate,
  Thumbnail,
} from '../../src';

describe('utility-component 테스트', () => {
  it(`${SkillResponseFactory.name} 컴포넌트 테스트`, () => {
    const mySkillResponseBySkillResponseFactoryFunction: SkillResponseType = SkillResponseFactory({
      chats: [
        SimpleText({
          text: '안녕하세요!',
        }),
        BasicCard({
          title: '카드 타이틀',
          description: '카드 디스크립션',
          thumbnail: Thumbnail({
            imageUrl: 'www.naver.com/logo.png',
            fixedRatio: true,
            width: 300,
            height: 300,
          }),
          buttons: [
            Button({
              label: '카드 버튼 1',
              action: 'webLink',
              webLinkUrl: 'www.google.com',
              messageText: '버튼 1이 눌렸습니다.',
              blockId: '999323',
              phoneNumber: '01055798101',
              extra: {
                intent_code: 'button_pressed',
              },
            }),
            Button({
              label: '카드 버튼 2',
              action: 'webLink',
              webLinkUrl: 'www.google.com',
              messageText: '버튼 2가 눌렸습니다.',
              blockId: '11111172',
              phoneNumber: '01055798101',
              extra: {
                intent_code: 'button_pressed',
              },
            }),
          ],
        }),
      ],
      quickReplies: [],
    });

    const mySkillResponse = SkillResponse({
      version: '2.0',
      template: SkillTemplate<DefaultContentType>({
        outputs: [
          Output({
            simpleText: SimpleText({
              text: '안녕하세요!',
            }),
          }),
          Output({
            basicCard: BasicCard({
              title: '카드 타이틀',
              description: '카드 디스크립션',
              thumbnail: Thumbnail({
                imageUrl: 'www.naver.com/logo.png',
                fixedRatio: true,
                width: 300,
                height: 300,
              }),
              buttons: [
                Button({
                  label: '카드 버튼 1',
                  action: 'webLink',
                  webLinkUrl: 'www.google.com',
                  messageText: '버튼 1이 눌렸습니다.',
                  blockId: '999323',
                  phoneNumber: '01055798101',
                  extra: {
                    intent_code: 'button_pressed',
                  },
                }),
                Button({
                  label: '카드 버튼 2',
                  action: 'webLink',
                  webLinkUrl: 'www.google.com',
                  messageText: '버튼 2가 눌렸습니다.',
                  blockId: '11111172',
                  phoneNumber: '01055798101',
                  extra: {
                    intent_code: 'button_pressed',
                  },
                }),
              ],
            }),
          }),
        ],
        quickReplies: [],
      }),
    });

    expect(mySkillResponseBySkillResponseFactoryFunction.render()).toStrictEqual(mySkillResponse.render());
  });
});
