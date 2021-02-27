import { ChatElement } from '../CoreChatElement.component';
import { SkillTemplateType } from './SkillTemplate.component';

interface SkillResponseElementPropsType {
  version: string;
  template: SkillTemplateType;
}

export type SkillResponseType = ChatElement<SkillResponseElementPropsType>;

// export interface SkillResponseParameter {
//   version?: string;
//   skillTemplate: SkillTemplateType;
// }

export function SkillResponse({ version, skillTemplate }): SkillResponseType {
  return new ChatElement('skillResponse', {
    version: version ? version : '2.0',
    template: skillTemplate,
  });
}
