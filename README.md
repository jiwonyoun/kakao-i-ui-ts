# kakao-i-ui-ts · <a href="http://npmjs.com/package/kakao-i-ui-ts"><img src="https://img.shields.io/npm/v/kakao-i-ui-ts?color=%230080ff" /></a>

Kakao i UI TS ("Kits")는 Typescript를 통해 손쉽게 Kakao i 오픈빌더 챗봇 응답을 만들 수 있도록 도와주는 라이브러리이다.

- [Kakao i 오픈빌더 챗봇의 JSON 응답 엘리먼트](https://i.kakao.com/docs/skill-response-format)들을 Typescript 코드를 통해 챗봇 응답을 쉽게 구현할 수 있다.
- 위 Kakao i 오픈빌더 엘리먼트들을 선언형 UI 패턴을 통해 컴포넌트를 서로 조합하여, 순수 JSON으로 렌더링할 수 있다.
- 컴포넌트의 응답 스펙을 사용자가 쉽게 수정하거나 정의할 수 있다.
- <a href="https://github.com/facebook/react">React</a>의 엘리먼트, 함수형 컴포넌트 등 이미 검증된 개념과 기능을 차용하여 구현하였다.

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

// Kakao i 오픈빌더 챗봇 스킬 응답으로 사용 가능한 JSON 데이터
console.log(renderChatElement(mySkillResponse));
```

```typescript
import { CoreComponent, renderChatElement } from 'kakao-i-ui-ts';

interface OrderedProduct {
  product_no: number;
  product_name: string;
  price: number;
  image: string;
}

interface Order {
  order_id: number;
  op_name: string;
  products: OrderedProduct[];
}

const orders: Order[] = [
  {
    order_id: 1,
    op_name: '김철수',
    products: [
      {
        product_no: 1,
        product_name: 'Line Note',
        price: 3900,
        image:
          'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_286/84-썸네일.jpg',
      },
      {
        product_no: 2,
        product_name: 'AX Pencil',
        price: 990,
        image: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
      },
    ],
  },
  {
    order_id: 2,
    op_name: '김철수',
    products: [
      {
        product_no: 32,
        product_name: 'TRFan',
        price: 19000,
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/68DF/production/_109474862_angrycat-index-getty3-3.jpg',
      },
      {
        product_no: 35,
        product_name: 'Q Table',
        price: 999000,
        image:
          'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
      },
    ],
  },
];

function OrderInfoCard(order: Order): BasicCardType {
  const getDescription = (orderedProducts: OrderedProduct[]) =>
    orderedProducts.map((orderedProduct) => orderedProduct.product_name).join(', ');

  return CoreComponent.BasicCard({
    description: getDescription(order.products),
    thumbnail: Thumbnail({
      imageUrl: order.products[0].image,
      fixedRatio: true,
      width: 600,
      height: 600,
    }),
    buttons: [],
  });
}

const orderInfoOutput = CoreComponent.Output({
  content: CoreComponent.Carousel({
    pagination: {
      currentPageNo: 1,
      paginationPageSize: 10,
      hasNextPageItems: false,
      hasPreviousPageItems: false,
    },
    cardType: 'basicCard',
    items: orders.map((order) => OrderInfoCard(order)),
  }),
});

console.log(renderChatElement(orderInfoOutput));
```

## 관련 프로젝트

- https://github.com/winz87/kakao-chatbot-templates - 본 프로젝트 개발에 해당 프로젝트의 여러 개념을 차용하였음
- https://github.com/facebook/react - 본 프로젝트 개발에 해당 프로젝트의 여러 개념을 차용하였음
