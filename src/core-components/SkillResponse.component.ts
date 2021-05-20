import { ChatElement } from 'chat-element-json-ts';
import { SkillResponseElementName } from './constants';
import { SkillTemplateType } from './SkillTemplate.component';

export type SkillResponseElementPropsType = {
  version: string;
  template: SkillTemplateType;
};

export type SkillResponseType = ChatElement<typeof SkillResponseElementName, SkillResponseElementPropsType>;

export function SkillResponse(skillResponseProps: SkillResponseElementPropsType): SkillResponseType {
  return new ChatElement(SkillResponseElementName, skillResponseProps);
}
