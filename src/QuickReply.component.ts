import { ChatElement } from './ChatElement.component'

export interface QuickReplyElementPropsType {
    label: string
    action: string
    messageText: string
    blockId: string
    extra?: Record<string, any>
}

export interface QuickReplyProp {
    label: string,
    action: "message" | "block",
    messageText: string,
    blockId: string,
    extra: Record<string, any>
}

export function QuickReply({ label, action, messageText, blockId, extra }: QuickReplyProp): ChatElement<QuickReplyElementPropsType> {
    return new ChatElement(
        'quickReply',
        {
            label,
            action,
            messageText,
            blockId,
            extra
        }
    )
}