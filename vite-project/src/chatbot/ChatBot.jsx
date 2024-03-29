import React, {useState} from 'react';
import "../styles/ChatBotFormStyle.css";

const ChatBotComponent = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Действия по обработке данных из поля ввода

        // Очистка поля ввода
        setInputValue('');
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleQuestionSubmit = () => {
        // Здесь можно добавить логику для получения ответа на вопрос пользователя
        // Например, можно использовать API для обработки запроса к чатботу
        setAnswer(`Ответ на вопрос "${question}"`);
    };

    return (
        <div className="dialogue-container">
            <h4>Информационная система</h4>
            <div className="bot-message">{answer}</div>
            <div className="message-form">
                <input
                    className="message-input"
                    type="text"
                    placeholder="Введите ваш вопрос"
                    value={question}
                    onChange={handleQuestionChange}
                    onBlur={handleSubmit}
                />
                <button className="send-button"
                        onClick={handleQuestionSubmit}
                >
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default ChatBotComponent;
