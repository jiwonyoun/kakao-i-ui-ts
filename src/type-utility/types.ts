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
;

/**
 * CoreComponent 타입 (예: type BasicCardType)에서 ElementName 타입을 가져옴
 */
export type CoreComponentTypeName<CoreComponentType> = CoreComponentType extends ChatElement<
infer ElementName,
infer _ChatElementProps
>
? ElementName
: never;
;