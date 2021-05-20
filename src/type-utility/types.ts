import { ChatElement } from 'chat-element-json-ts';

/**
 * CoreComponent 함수에서 Props 타입을 가져옴
 */
export type CoreComponentProp<CC> = CC extends (componentProps: infer P) => ChatElement ? P : never;
