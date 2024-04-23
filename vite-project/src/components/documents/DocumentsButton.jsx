import React, {useState} from 'react';
import "/src/styles/ChatBotButtonStyle.css";
import DocumentsPage from "./DocumentsPage";

const UseDocumentsListButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDocuments = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button
                className="button"
                onClick={toggleDocuments}><h2>Документация</h2>
                <div id="clip">
                    <div id="leftTop" className="corner"/>
                    <div id="rightBottom" className="corner"/>
                    <div id="rightTop" className="corner"/>
                    <div id="leftBottom" className="corner"/>
                </div>
                <span id="rightArrow" className="arrow"/>
                <span id="leftArrow" className="arrow"/>
            </button>
            {isOpen && <DocumentsPage/>}
        </div>
    );
}

export default UseDocumentsListButton;