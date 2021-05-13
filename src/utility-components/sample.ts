

// startmenu
skillResponse({
    chats: [
        // startmenu.chat.0
        basicCard ({
            
        }),
        condition({
            condition: conditionA(arg1, arg2, arg3), 
            ifTrue: basicCard ({
                // startmenu.chat.0.title
                title: '*',
                // startmenu.chat.0.description
                description: '*'
                buttons: [
                    {
                        // startmenu.chat.0.buttons.0.label
                        label: '*'
                        ...toIntent({
                            intentCode: 'start_menu',
                            block: 'fallback'
                        })
                    }
                ]
            }), 
            ifFalse: basicCard ({
                // startmenu.chat.0.title
                title: '*',
                // startmenu.chat.0.description
                description: '*'
                buttons: [
                    {
                        // startmenu.chat.0.buttons.0.label
                        label: '*'
                        ...toIntent({
                            intentCode: 'start_menu',
                            block: 'fallback'
                        })
                    }
                ]
            }), 
        })
        carousel [
            carouselHeader({}),
            commerceCard({}),
            commerceCard({}),
            commerceCard({}),
            commerceCard({}),
            commerceCard({}),
        ]
    ]
    quickReplies: [
        quickReply()
    ]
})