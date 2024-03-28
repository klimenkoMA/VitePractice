import React, { useState } from 'react';
import { Widget } from 'react-chatbot-widget';

const ChatBotComponent = () => {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    };

    const handleClose = () => {
        setOpened(false);
    };

    return (
        <div>
            <button onClick={handleOpen}>Open Chat Bot</button>
            {opened && (
                <Widget
                    handleNewUserMessage={(newMessage) => console.log(`New message incoming! ${newMessage}`)}
                    title="ChatBot"
                    subtitle="Ask me anything!"
                    senderPlaceHolder="Type a message..."
                />
            )}
        </div>
    );
};

export default ChatBotComponent;
