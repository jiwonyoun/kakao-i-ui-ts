import { ChatElement } from '../CoreChatElement.component';
import { OutputType } from './Output.component';
import { QuickReplyType } from './QuickReply.component';

export interface SkillTemplateElementPropsType {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export type SkillTemplateType = ChatElement<SkillTemplateElementPropsType>;

export interface SkillTemplateParameter {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export function SkillTemplate({ outputs, quickReplies }: SkillTemplateParameter): SkillTemplateType {
  return new ChatElement('template', {
    outputs,
    quickReplies,
  } as SkillTemplateElementPropsType);
}
