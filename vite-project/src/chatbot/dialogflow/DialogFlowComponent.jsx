import React, { useState } from 'react';
import axios from 'axios';

const DialogflowChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = async () => {
        const response = await axios.post('https://dialogflow.googleapis.com/v2/projects/PROJECT_ID/agent/sessions/SESSION_ID:detectIntent', {
            queryInput: {
                text: {
                    text: inputMessage,
                    languageCode: 'en-US'
                }
            }
        }, {
            headers: {
                Authorization: 'Bearer ACCESS_TOKEN'
            }
        });

        const newMessage = {
            text: response.data.queryResult.fulfillmentText,
            isUser: false
        };
        setMessages([...messages, newMessage]);
        setInputMessage('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage().then();
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.isUser ? 'right' : 'left' }}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default DialogflowChat;
