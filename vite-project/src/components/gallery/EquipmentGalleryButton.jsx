import React, {useState} from 'react';
import "/src/styles/ChatBotButtonStyle.css";
import EquipmentPage from "./EquipmentPage";

const UseEquipmentGalleryButton = () => {
    const [isOpen, setIsOpen] = useState(false); // Статус открытого диалога

    const toggleGallery = () => {
        setIsOpen(!isOpen); // Изменяем статус открытого диалога
    }

    return (
        <div>
            <button
                className="button"
                onClick={toggleGallery}><h2>Оборудование</h2>
                <div id="clip">
                    <div id="leftTop" className="corner"/>
                    <div id="rightBottom" className="corner"/>
                    <div id="rightTop" className="corner"/>
                    <div id="leftBottom" className="corner"/>
                </div>
                <span id="rightArrow" className="arrow"/>
                <span id="leftArrow" className="arrow"/>
            </button>
            {isOpen && <EquipmentPage/>}
        </div>
    );
}

export default UseEquipmentGalleryButton;