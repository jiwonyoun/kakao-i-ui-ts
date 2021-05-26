import { ChatElement } from 'chat-element-json-ts';
import { SkillTemplateElementName } from './constants';
import { OutputType } from './Output.component';
import { QuickReplyType } from './QuickReply.component';

export type SkillTemplateElementPropsType = {
  outputs: OutputType[];
  quickReplies?: QuickReplyType[];
};

export type SkillTemplateType = ChatElement<typeof SkillTemplateElementName, SkillTemplateElementPropsType>;

export function SkillTemplate(skillTemplateProps: SkillTemplateElementPropsType): SkillTemplateType {
  return new ChatElement(SkillTemplateElementName, skillTemplateProps);
}
