import { ChatElement } from 'chat-element-json-ts';
import { SkillTemplateComponentName } from './constants';
import { OutputType } from './Output.component';
import { QuickReplyType } from './QuickReply.component';

interface SkillTemplateElementPropsType {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export type SkillTemplateType = ChatElement<typeof SkillTemplateComponentName, SkillTemplateElementPropsType>;

export interface SkillTemplateParameter {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
}

export function SkillTemplate({ outputs, quickReplies }: SkillTemplateParameter): SkillTemplateType {
  return new ChatElement(SkillTemplateComponentName, {
    outputs,
    quickReplies,
  });
}
