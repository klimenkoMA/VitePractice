// src/components/YandexAIComponent.js

import React, { useState } from "react";

const YandexAIComponent = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://api.ai.yandex.net?question=${question}`);
            const data = await response.json();
            setAnswer(data.answer);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={question} onChange={handleQuestionChange} />
            <button onClick={handleSubmit}>Submit</button>
            <textarea value={answer} readOnly />
        </div>
    );
};

export default YandexAIComponent;