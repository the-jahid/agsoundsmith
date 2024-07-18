'use client'

import { FullPageChat } from "flowise-embed-react"

export const Bot = () => {
    return (
        <FullPageChat
            chatflowid="c25c7313-f6fa-476c-9a8c-b73af893e107"
            apiHost="https://aditya2306-aditiya.hf.space"
            theme={{
                chatWindow: {
                    showTitle: true,
                    title: ' Bot',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                  
                    welcomeMessage: 'Hello! How can i assist you today',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 5000,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 5000 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Aditya',
                        companyLink: 'https://flowiseai.com',
                    }
                }
            }}
        />
    );
};