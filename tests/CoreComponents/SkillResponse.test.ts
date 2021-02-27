import { CoreComponent, renderChatElement } from '../../src';

describe("SkillResponse 컴포넌트 테스트", () => {
  const skillResponseComponentInstance1 = CoreComponent.SkillResponse({
    skillTemplate: CoreComponent.SkillTemplate({
      outputs: [
        CoreComponent.Output({
          content: CoreComponent.SimpleText({
            text: '안녕하세요!',
          }),
        }),
        CoreComponent.Output({
          content: CoreComponent.BasicCard({
            title: '카드 타이틀',
            description: '카드 디스크립션',
            thumbnail: CoreComponent.Thumbnail({
              imageUrl: 'www.naver.com/logo.png',
              fixedRatio: true,
              width: 300,
              height: 300,
            }),
            buttons: [
              CoreComponent.Button({
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
              CoreComponent.Button({
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

  const kakaoiSkillResponseJSON1 = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: '안녕하세요!',
          },
        },
        {
          basicCard: {
            title: '카드 타이틀',
            description: '카드 디스크립션',
            thumbnail: {
              imageUrl: 'www.naver.com/logo.png',
              fixedRatio: true,
              width: 300,
              height: 300,
            },
            buttons: [
              {
                action: 'webLink',
                label: '카드 버튼 1',
                messageText: '버튼 1이 눌렸습니다.',
                blockId: '999323',
                phoneNumber: '01055798101',
                webLinkUrl: 'www.google.com',
                extra: {
                  intent_code: 'button_pressed',
                },
              },
              {
                action: 'webLink',
                label: '카드 버튼 2',
                messageText: '버튼 2가 눌렸습니다.',
                blockId: '11111172',
                phoneNumber: '01055798101',
                webLinkUrl: 'www.google.com',
                extra: {
                  intent_code: 'button_pressed',
                },
              },
            ],
          },
        },
      ],
      quickReplies: [],
    },
  };

  const renderedSKillResponseComponentInstance1 = renderChatElement(skillResponseComponentInstance1);

  it("RenderedSKillResponseComponentInstance_1 === KakaoiSkillResponseJSON_1", () => {
    expect(renderedSKillResponseComponentInstance1).toEqual(kakaoiSkillResponseJSON1);
    if (true) {
      console.log(JSON.stringify(renderedSKillResponseComponentInstance1, null, 2));
    }
  });
});
