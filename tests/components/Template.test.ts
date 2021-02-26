import { renderChatElement } from '../../src/ChatElement.component'
import { Template } from '../../src/Template.component'
import { Content } from '../../src/Content.component'
import { BasicCard } from '../../src/BasicCard.component'
import { Button } from '../../src/Button.component'
import { Thumbnail } from '../../src/Thumbnail.component'

describe('Template Renders Well', () => {
    const TemplateComponentInstance_1 = Template({
        contents: [
            Content({
                card_or_cards: BasicCard({
                    title: '카드 타이틀',
                    description: '카드 디스크립션',
                    thumbnail: Thumbnail({
                        imageUrl: 'www.naver.com/logo.png',
                        fixedRatio: true,
                        width: 300,
                        height: 300
                    }),
                    buttons: [
                        Button({
                            label: '카드 버튼 1',
                            action: "webLink",
                            webLinkUrl: 'www.google.com',
                            messageText: '버튼 1이 눌렸습니다.',
                            blockId: '999323',
                            phoneNumber: '01055798101',
                            extra: {
                                'intent_code': 'button_pressed'
                            }
                        }),
                        Button({
                            label: '카드 버튼 2',
                            action: "webLink",
                            webLinkUrl: 'www.google.com',
                            messageText: '버튼 2가 눌렸습니다.',
                            blockId: '11111172',
                            phoneNumber: '01055798101',
                            extra: {
                                'intent_code': 'button_pressed'
                            }
                        })
                    ]
                })
            }
            )
        ],
        quickReplies: []
    })

    const KakaoiTemplateJSON_1 = {
        "outputs": [
            {
                "basicCard": {
                    "title": "카드 타이틀",
                    "description": "카드 디스크립션",
                    "thumbnail": {
                        "imageUrl": "www.naver.com/logo.png",
                        "fixedRatio": true,
                        "width": 300,
                        "height": 300
                    },
                    "buttons": [
                        {
                            "action": "webLink",
                            "label": "카드 버튼 1",
                            "messageText": "버튼 1이 눌렸습니다.",
                            "blockId": "999323",
                            "phoneNumber": "01055798101",
                            "webLinkUrl": "www.google.com",
                            "extra": {
                                'intent_code': 'button_pressed'
                            }
                        },
                        {

                            "action": "webLink",
                            "label": "카드 버튼 2",
                            "messageText": "버튼 2가 눌렸습니다.",
                            "blockId": "11111172",
                            "phoneNumber": "01055798101",
                            "webLinkUrl": "www.google.com",
                            "extra": {
                                'intent_code': 'button_pressed'
                            }
                        }
                    ]
                }
            }
        ],
        "quickReplies": []
    }

    const rendered_TemplateComponentInstance_1 = renderChatElement(TemplateComponentInstance_1)


    it('Rendered TemplateComponentInstance_1 === KakaoiTemplateJSON_1', () => {
        expect(rendered_TemplateComponentInstance_1).toEqual(KakaoiTemplateJSON_1)
        if (true) {
            console.log(
                JSON.stringify(
                    rendered_TemplateComponentInstance_1,
                    null,
                    2,
                ),
            )
        }
    })
})
