import { ChatElement } from "../CoreChatElement.component";
import { SkillTemplateType } from "./SkillTemplate.component";

export interface SkillResponseElementPropsType {
  version: string;
  template: SkillTemplateType;
}

export type SkillResponseType = ChatElement<SkillResponseElementPropsType>;

export interface SkillResponseParameter {
  version: string;
  skillTemplate: SkillTemplateType;
}

export function SkillResponse({
  version = "2.0",
  skillTemplate,
}: SkillResponseParameter) {
  return new ChatElement("skillResponse", <SkillResponseElementPropsType>{
    version,
    template: skillTemplate,
  });
}
