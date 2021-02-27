# kakao-i-ui-ts

# 개요
Kakao i UI TS는 Typescript를 통해 손쉽게 Kakao i 오픈빌더 챗봇 응답을 만들 수 있도록 도와주는 라이브러리이다.

## 특징
- [Kakao i 오픈빌더 챗봇의 JSON 응답 엘리먼트](https://i.kakao.com/docs/skill-response-format)들을 Typescript를 통해 함수형 컴포넌트로 구현하여, 프로그래밍적으로 챗봇 응답을 구현할 수 있다.
- 위 Kakao i 오픈빌더 엘리먼트들을 선언형 UI 패턴을 통해 서로 조합하여, 순수 JSON으로 손쉽게 렌더링할 수 있다.
- 컴포넌트의 응답 스펙을 쉽게 수정할 수 있다.
- Facebook에서 개발한 Javascript 라이브러리 React의 컴포넌트, 엘리먼트, 함수형 컴포넌트 등 이미 검증된 개념과 기능을 차용하여 구현하였다.

# 사용법

## 설치

```shell
npm i kakao-i-ui-ts
```

## 테스트
```shell
npm test
```

## 예제
```typescript

import { CoreComponent, renderChatElement } from 'kakao-i-ui-ts';

const mySkillResponse = CoreComponent.SkillResponse({
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
} as CoreComponent.SkillResponseParameter);

// Kakao i 오픈빌더 챗봇 스킬 응답으로 사용 가능한 JSON 데이터
console.log(renderChatElement(mySkillResponse))
```

## 관련 프로젝트
- https://github.com/winz87/kakao-chatbot-templates - 본 프로젝트 개발에 해당 프로젝트의 여러 개념을 차용하였음
- https://github.com/facebook/react - 본 프로젝트 개발에 해당 프로젝트의 여러 개념을 차용하였음