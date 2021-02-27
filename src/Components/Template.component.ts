import { ChatElement } from "../CoreChatElement.component";
import { ContentElement } from "./Content.component";
import { QuickReplyElementPropsType } from "./QuickReply.component";

export interface TemplateElementPropsType {
  outputs: ContentElement[];
  quickReplies?: ChatElement<QuickReplyElementPropsType>[];
}

export type TemplateElement = ChatElement<TemplateElementPropsType>;

export interface TemplateParameter {
  contents: ContentElement[];
  quickReplies?: ChatElement<QuickReplyElementPropsType>[];
}

export function Template({
  contents,
  quickReplies,
}: TemplateParameter): TemplateElement {
  return new ChatElement("template", <TemplateElementPropsType>{
    outputs: contents,
    quickReplies: quickReplies,
  });
}
