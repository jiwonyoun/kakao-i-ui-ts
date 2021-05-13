import { CoreComponent } from '../../src';

describe('코어 컴포넌트 테스트', () => {
  it('렌더링한 컴포넌트가 Kakao i 오픈빌더 챗봇 응답 사양과 동일함', () => {
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

    const sampleSkillResponse = {
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

    expect(mySkillResponse.render()).toStrictEqual(sampleSkillResponse);
  });
  it('Array.map을 통해 BasicCard 컴포넌트 인스턴스들을 생성함', () => {
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
            image:
              'https://ichef.bbci.co.uk/news/1024/cpsprodpb/68DF/production/_109474862_angrycat-index-getty3-3.jpg',
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

    function OrderInfoCard(order: Order): CoreComponent.BasicCardType {
      const getDescription = (orderedProducts: OrderedProduct[]) =>
        orderedProducts.map((orderedProduct) => orderedProduct.product_name).join(', ');

      return CoreComponent.BasicCard({
        description: getDescription(order.products),
        thumbnail: CoreComponent.Thumbnail({
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
        cardType: 'basicCard',
        items: orders.map((order) => OrderInfoCard(order)),
      }),
    });

    expect(orderInfoOutput.render()).toEqual({
      carousel: {
        type: 'basicCard',
        items: [
          {
            description: 'Line Note, AX Pencil',
            thumbnail: {
              imageUrl:
                'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_286/84-썸네일.jpg',
              fixedRatio: true,
              width: 600,
              height: 600,
            },
            buttons: [],
          },
          {
            description: 'TRFan, Q Table',
            thumbnail: {
              imageUrl:
                'https://ichef.bbci.co.uk/news/1024/cpsprodpb/68DF/production/_109474862_angrycat-index-getty3-3.jpg',
              fixedRatio: true,
              width: 600,
              height: 600,
            },
            buttons: [],
          },
        ],
      },
    });
  });

  it('Button.extra 안 ChatElement 인스턴스 렌더링', () => {
    const sampleBasicCard = CoreComponent.BasicCard({
      title: 'myBasicCard',
      description: 'MyDescription',
      thumbnail: CoreComponent.Thumbnail({
        imageUrl: 'www.github.com',
        fixedRatio: true,
        width: 300,
        height: 300,
      }),
      buttons: [
        CoreComponent.Button({
          label: 'Click me to spawn yourBasicCard',
          action: 'block',
          extra: {
            block_info_container: {
              block_info: {
                basicCard: CoreComponent.BasicCard({
                  title: 'yourBasicCard',
                  description: 'yourDescription',
                  thumbnail: CoreComponent.Thumbnail({
                    imageUrl: 'www.github.com',
                    fixedRatio: true,
                    width: 300,
                    height: 300,
                  }),
                  buttons: [],
                }),
              },
            },
          },
        }),
      ],
    });

    expect(sampleBasicCard.render()).toEqual({
      title: 'myBasicCard',
      description: 'MyDescription',
      thumbnail: {
        imageUrl: 'www.github.com',
        fixedRatio: true,
        width: 300,
        height: 300,
      },
      buttons: [
        {
          label: 'Click me to spawn yourBasicCard',
          action: 'block',
          extra: {
            block_info_container: {
              block_info: {
                basicCard: {
                  title: 'yourBasicCard',
                  description: 'yourDescription',
                  thumbnail: {
                    imageUrl: 'www.github.com',
                    fixedRatio: true,
                    width: 300,
                    height: 300,
                  },
                  buttons: [],
                },
              },
            },
          },
        },
      ],
    });
  });
});
