import { ChatElement } from 'chat-element-json-ts';
import { SkillResponseElementName } from './constants';
import { SkillTemplateType } from './SkillTemplate.component';

interface SkillResponseElementPropsType {
  version: string;
  template: SkillTemplateType;
}

export type SkillResponseType = ChatElement<typeof SkillResponseElementName, SkillResponseElementPropsType>;

export interface SkillResponseParameter {
  version?: string;
  skillTemplate: SkillTemplateType;
}

export function SkillResponse({ version, skillTemplate }: SkillResponseParameter): SkillResponseType {
  return new ChatElement(SkillResponseElementName, {
    version: version ? version : '2.0',
    template: skillTemplate,
  });
}
