import { ChatElement } from './ChatElement.component'
import { ContentElementPropsType } from './Content.component'
import { QuickReplyElementPropsType } from './QuickReply.component'

export interface TemplateElementPropsType {
    outputs: ChatElement<ContentElementPropsType>[],
    quickReplies?: ChatElement<QuickReplyElementPropsType>[]
}

export interface TemplateProp {
    contents: ChatElement<ContentElementPropsType>[],
    quickReplies?: ChatElement<QuickReplyElementPropsType>[]
}

export function Template({ contents, quickReplies }: TemplateProp): ChatElement<TemplateElementPropsType> {
    return new ChatElement(
        'template',
        {
            outputs: contents,
            quickReplies: quickReplies
        }
    )
}