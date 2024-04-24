import React, {useState} from "react";
import answerQuestion from "./DialogWithChatBot";

function DialogWithChatBotComponent() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    try {
        const handleQuestion = async () => {
            const response = await answerQuestion(question);
            setAnswer(response);
        };

        return (
            <div>
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <button onClick={handleQuestion}>
                    Задать вопрос
                </button>
                <p>Ответ: {answer}</p>
            </div>
        );
    }catch (e) {
        console.log(e.message);
    }
}

export default DialogWithChatBotComponent;