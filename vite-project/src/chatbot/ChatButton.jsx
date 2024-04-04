import React, { useState } from 'react';
import ChatBotDialog from './DialogChatBot';

const ChatBotDialogButton = () => {
    const [isOpen, setIsOpen] = useState(false); // Статус открытого диалога

    const toggleDialog = () => {
        setIsOpen(!isOpen); // Изменяем статус открытого диалога
    }

    return (
        <div>
            <button
                onClick={toggleDialog}>Система знаний</button>
            {isOpen && <ChatBotDialog />}
        </div>
    );
}

export default ChatBotDialogButton;