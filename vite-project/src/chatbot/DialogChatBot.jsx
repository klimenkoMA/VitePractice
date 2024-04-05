import React, {useState, useEffect} from 'react';
import CloseButton from "./buttons/CloseButton";

const ChatBotDialog = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const handleSendMessage = () => {
        addMessage(
            `Вы: ${inputMessage}`
        );
        setInputMessage('');
        // Добавить здесь логику для обработки введенного пользователем сообщения и получения ответа от чатбота
    };

    useEffect(() => {
        // Эмуляция получения новых сообщений от чатбота
        const newMessage = 'Привет! Как я могу помочь вам?';
        addMessage(newMessage);
    }, []);

    return isOpen ? (
        <div className='dialogue-container'>
            <div
                style={{
                    flexDirection: `row`
                }}
            >
                <div
                    style={{
                        display: `flex`,
                        alignItems: `flex-end`
                    }}
                >
                    <h3>Система знаний </h3>
                    <div>
                        <CloseButton onClick={handleClose}/>
                    </div>
                </div>

            </div>
            <div
                className='message-form'
            >
                {messages.map((message, index) => (
                    <div
                        style={{
                            textAlign: message.slice(0, 3) === `Вы:` ? `right` : `left`
                        }}
                        key={index}>
                        {message}
                    </div>
                ))}
            </div>
            <input
                className='message-input'
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        // Здесь можно добавить обработчик для отправки данных
                        handleSendMessage()
                    }
                }}
            />
            <button
                className='send-button'
                onClick={handleSendMessage}>Отправить
            </button>
        </div>
    ) : null;
};

export default ChatBotDialog;