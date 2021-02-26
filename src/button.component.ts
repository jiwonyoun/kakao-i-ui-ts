import { ChatElement } from './ChatElement.component'

export interface ButtonElementPropsType {
    label: string
    action: string
    webLinkUrl?: string
    messageText?: string
    phoneNumber?: string
    blockId?: string
    extra?: Record<string, any>
}

export interface ButtonProp {
    label: string,
    action: "webLink" | "message" | "block" | "phone",
    webLinkUrl?: string,
    messageText?: string,
    blockId?: string,
    phoneNumber?: string,
    extra?: Record<string, any>
}

export function Button({ label, action, webLinkUrl, messageText, blockId, phoneNumber, extra }: ButtonProp): ChatElement<ButtonElementPropsType> {
    return new ChatElement(
        'button',
        {
            label,
            action,
            webLinkUrl,
            messageText,
            blockId,
            phoneNumber,
            extra
        }
    )
}