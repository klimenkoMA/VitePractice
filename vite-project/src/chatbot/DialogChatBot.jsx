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
            <div className="header-box">
                <div className="header-box-title">
                    <div className="header-box-title-name">
                        <h4>Система знаний </h4>
                    </div>
                    <div className="header-box-title-close">
                        <CloseButton onClick={handleClose}/>
                    </div>
                </div>
            </div>
            <div className='message-form'>
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
            <div className="input-block">
                <div className="input-block-message">
                    <input
                        className="message-input"
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
                </div>
                <div>
                    <button
                        className='send-button'
                        onClick={handleSendMessage}>Отправить
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default ChatBotDialog;