import { ChatElement } from 'chat-element-json-ts';
import { SkillTemplateElementName } from './constants';
import { OutputType } from './Output.component';
import { QuickReplyType } from './QuickReply.component';

interface SkillTemplateElementPropsType {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export type SkillTemplateType = ChatElement<typeof SkillTemplateElementName, SkillTemplateElementPropsType>;

export interface SkillTemplateParameter {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export function SkillTemplate({ outputs, quickReplies }: SkillTemplateParameter): SkillTemplateType {
  return new ChatElement(SkillTemplateElementName, {
    outputs,
    quickReplies,
  });
}
