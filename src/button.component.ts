export interface KIV2Button {
    label: string;
    action: string;
    webLinkUrl?: string;
    messageText?: string;
    phoneNumber?: string;
    blockId?: string;
    extra?: Record<string, any>;
}
