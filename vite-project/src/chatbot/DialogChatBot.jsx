import React, {useState, useEffect} from 'react';

const ChatBotDialog = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const handleSendMessage = () => {
        addMessage(`Вы: ${inputMessage}`);
        setInputMessage('');
        // Добавить здесь логику для обработки введенного пользователем сообщения и получения ответа от чатбота
    };

    useEffect(() => {
        // Эмуляция получения новых сообщений от чатбота
        const newMessage = 'Привет! Как я могу помочь вам?';
        addMessage(newMessage);
    }, []);

    return (
        <div className='dialogue-container'>
            <h3>Система знаний</h3>
            <div
                className='message-form'
            >
                {messages.map((message, index) => (
                    <div

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
            />
            <button
                className='send-button'
                onClick={handleSendMessage}>Отправить
            </button>
        </div>
    );
};

export default ChatBotDialog;