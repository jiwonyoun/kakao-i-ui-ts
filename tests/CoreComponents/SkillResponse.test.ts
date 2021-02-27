import * as CoreComponent from "../../src";

describe("SkillResponse 컴포넌트 테스트", () => {
  const SkillResponseComponentInstance_1 = CoreComponent.SkillResponse(<
    CoreComponent.SkillResponseParameter
  >{
    skillTemplate: CoreComponent.SkillTemplate({
      outputs: [
        CoreComponent.Output({
          content: CoreComponent.SimpleText({
            text: "안녕하세요!",
          }),
        }),
        CoreComponent.Output({
          content: CoreComponent.BasicCard({
            title: "카드 타이틀",
            description: "카드 디스크립션",
            thumbnail: CoreComponent.Thumbnail({
              imageUrl: "www.naver.com/logo.png",
              fixedRatio: true,
              width: 300,
              height: 300,
            }),
            buttons: [
              CoreComponent.Button({
                label: "카드 버튼 1",
                action: "webLink",
                webLinkUrl: "www.google.com",
                messageText: "버튼 1이 눌렸습니다.",
                blockId: "999323",
                phoneNumber: "01055798101",
                extra: {
                  intent_code: "button_pressed",
                },
              }),
              CoreComponent.Button({
                label: "카드 버튼 2",
                action: "webLink",
                webLinkUrl: "www.google.com",
                messageText: "버튼 2가 눌렸습니다.",
                blockId: "11111172",
                phoneNumber: "01055798101",
                extra: {
                  intent_code: "button_pressed",
                },
              }),
            ],
          }),
        }),
      ],
      quickReplies: [],
    }),
  });

  const KakaoiSkillResponseJSON_1 = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "안녕하세요!",
          },
        },
        {
          basicCard: {
            title: "카드 타이틀",
            description: "카드 디스크립션",
            thumbnail: {
              imageUrl: "www.naver.com/logo.png",
              fixedRatio: true,
              width: 300,
              height: 300,
            },
            buttons: [
              {
                action: "webLink",
                label: "카드 버튼 1",
                messageText: "버튼 1이 눌렸습니다.",
                blockId: "999323",
                phoneNumber: "01055798101",
                webLinkUrl: "www.google.com",
                extra: {
                  intent_code: "button_pressed",
                },
              },
              {
                action: "webLink",
                label: "카드 버튼 2",
                messageText: "버튼 2가 눌렸습니다.",
                blockId: "11111172",
                phoneNumber: "01055798101",
                webLinkUrl: "www.google.com",
                extra: {
                  intent_code: "button_pressed",
                },
              },
            ],
          },
        },
      ],
      quickReplies: [],
    },
  };

  const RenderedSKillResponseComponentInstance_1 = CoreComponent.renderChatElement(
    SkillResponseComponentInstance_1
  );

  it("RenderedSKillResponseComponentInstance_1 === KakaoiSkillResponseJSON_1", () => {
    expect(RenderedSKillResponseComponentInstance_1).toEqual(
      KakaoiSkillResponseJSON_1
    );
    if (true) {
      console.log(
        JSON.stringify(RenderedSKillResponseComponentInstance_1, null, 2)
      );
    }
  });
});
