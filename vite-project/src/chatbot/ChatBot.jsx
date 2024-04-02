// import React, {useState, useEffect} from 'react';
// import "../styles/ChatBotFormStyle.css";
//
// const ChatBotComponent = () => {
//     const [question, setQuestion] = useState('');
//     // const [answer, setAnswer] = useState('');
//     const [messages, setMessages] = useState([]);
//
//
//     // const handleInputClear = (message) => {
//     //
//     //     message.preventDefault();
//     //     // Действия по обработке данных из поля ввода
//     //     // Очистка поля ввода
//     //     setQuestion('');
//     // };
//
//     const handleQuestionChange = (message) => {
//         // let quest = message.target.value;
//         // setQuestion(quest);
//         setMessages([...messages, message]);
//         return (
//             <div>
//                 {messages.map((message, index) => (
//                     <div key={index}>{message}</div>
//                 ))}
//             </div>
//         );
//
//     };
//
//     useEffect(() => {
//         const newMessage = "Привет! Чем я могу вам помочь?";
//         handleQuestionChange(newMessage);
//     }, []);
//
//     const handleQuestionSubmit = () => {
//         // Здесь можно добавить логику для получения ответа на вопрос пользователя
//         // Например, можно использовать API для обработки запроса к чатботу
//
//         // setAnswer(`Ответ на вопрос "${question}"`);
//         return (
//             <div>
//                 {messages.map((message, index) => (
//                     <div key={index}>{message}</div>
//                 ))}
//             </div>
//         );
//
//     };
//
//     return (
//         <div className="dialogue-container">
//             <h4>Информационная система</h4>
//             <div className="bot-message">{messages}</div>
//             <div className="message-form"
//             >
//                 <input
//                     className="message-input"
//                     type="text"
//                     placeholder="Введите ваш вопрос"
//                     value={question}
//                     // onChange={handleQuestionSubmit}
//                     // onChange={handleQuestionChange}
//                     // onBlur={handleQuestionSubmit}
//                     // onBlur={handleQuestionChange}
//                 />
//                 <button className="send-button"
//                         onClick={handleQuestionSubmit}
//                 >
//                     Отправить
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default ChatBotComponent;
