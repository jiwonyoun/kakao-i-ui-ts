import { ChatElement } from 'chat-element-json-ts';
import { DefaultContentType } from '.';
import { SkillResponseElementName } from './constants';
import { SkillTemplateType } from './SkillTemplate.component';

export class SkillResponseElementPropsType<AllowedContentType = DefaultContentType> {
  version: string;
  template: SkillTemplateType<AllowedContentType>;
}

export type SkillResponseType<AllowedContentType = DefaultContentType> = ChatElement<
  typeof SkillResponseElementName,
  SkillResponseElementPropsType<AllowedContentType>
>;

export function SkillResponse<AllowedContentType = DefaultContentType>(
  skillResponseProps: SkillResponseElementPropsType<AllowedContentType>,
): SkillResponseType<AllowedContentType> {
  return new ChatElement(SkillResponseElementName, skillResponseProps);
}
