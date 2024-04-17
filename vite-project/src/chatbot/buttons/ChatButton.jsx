import React, { useState } from 'react';
import ChatBotDialog from '../DialogChatBot';
import "/src/styles/ChatBotButtonStyle.css";

const ChatBotDialogButton = () => {
    const [isOpen, setIsOpen] = useState(false); // Статус открытого диалога

    const toggleDialog = () => {
        setIsOpen(!isOpen); // Изменяем статус открытого диалога
    }

    return (
        <div>
            <button
                className="button"
                onClick={toggleDialog}><h2>Система знаний</h2>
                <div id="clip">
                    <div id="leftTop" className="corner"/>
                    <div id="rightBottom" className="corner"/>
                    <div id="rightTop" className="corner"/>
                    <div id="leftBottom" className="corner"/>
                </div>
                <span id="rightArrow" className="arrow"/>
                <span id="leftArrow" className="arrow"/>
            </button>
            {isOpen && <ChatBotDialog />}
        </div>
    );
}

export default ChatBotDialogButton;