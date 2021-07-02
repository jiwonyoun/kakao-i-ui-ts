import { ChatElement } from 'chat-element-json-ts';
import { SkillTemplateElementName } from './constants';
import { DefaultContentType, OutputType } from './Output.component';
import { QuickReplyType } from './QuickReply.component';

export type SkillTemplateElementPropsType<AllowedContentType> = {
  outputs: OutputType<AllowedContentType>[];
  quickReplies?: QuickReplyType[];
};

export type SkillTemplateType<AllowedContentType = DefaultContentType> = ChatElement<
  typeof SkillTemplateElementName,
  SkillTemplateElementPropsType<AllowedContentType>
>;

export function SkillTemplate<AllowedContentType = DefaultContentType>(
  skillTemplateProps: SkillTemplateElementPropsType<AllowedContentType>,
): SkillTemplateType<AllowedContentType> {
  return new ChatElement(SkillTemplateElementName, skillTemplateProps);
}
