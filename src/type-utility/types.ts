import { ChatElement } from 'chat-element-json-ts';

/**
 * CoreComponent 함수 (예: function BasicCard)에서 Props 타입을 가져옴
 */
export type CoreComponentFunctionProp<CC> = CC extends (componentProps: infer P) => ChatElement ? P : never;

/**
 * CoreComponent 타입 (예: type BasicCardType)에서 Props 타입을 가져옴
 */
export type CoreComponentTypeProp<CoreComponentType> = CoreComponentType extends ChatElement<
  infer _ChatElementName,
  infer ChatElementProps
>
  ? ChatElementProps
  : never;
/**
 * CoreComponent 타입 (예: type BasicCardType)에서 ElementName 타입을 가져옴
 */
export type CoreComponentTypeName<CoreComponentType> = CoreComponentType extends ChatElement<
  infer ElementName,
  infer _ChatElementProps
>
  ? ElementName
  : never;

/**
 * 채팅 엘리먼트 타입 (예: type BasicCardType)을 인자로 받아 배열 타입으로 만듬.
 * 만약 Union이 적용된 타입일 경우, 타입이 분배됨.
 * (예: BasicCardType | CommerceCardType => BasicCardType[] | CommerceCardType[]
 */
export type ArrayOfChatElements<
  CoreComponentType extends ChatElement = ChatElement
> = CoreComponentType extends ChatElement ? CoreComponentType[] : never;

/**
 * 배열 타입에서 내부 타입을 가져옴. (예: BasicCardType[] => BasicCardType)
 */
export type Unarray<T> = T extends Array<infer U> ? U : T;
