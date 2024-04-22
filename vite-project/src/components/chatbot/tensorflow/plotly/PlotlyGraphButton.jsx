import React, {useState} from 'react';
import "/src/styles/ChatBotButtonStyle.css";
import UsePlotly from "./PlotlyGraph";

const UsePlotlyButton = () => {
    const [isOpen, setIsOpen] = useState(false); // Статус открытого диалога

    const togglePlotly = () => {
        setIsOpen(!isOpen); // Изменяем статус открытого диалога
    }

    return (
        <div>
            <button
                className="button"
                onClick={togglePlotly}><h2>График</h2>
                <div id="clip">
                    <div id="leftTop" className="corner"/>
                    <div id="rightBottom" className="corner"/>
                    <div id="rightTop" className="corner"/>
                    <div id="leftBottom" className="corner"/>
                </div>
                <span id="rightArrow" className="arrow"/>
                <span id="leftArrow" className="arrow"/>
            </button>
            {isOpen && <UsePlotly/>}
        </div>
    );
}

export default UsePlotlyButton;