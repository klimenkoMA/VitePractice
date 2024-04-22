import React from 'react';
import EquipmentGallery from './EquipmentGallery';

const EquipmentPage = () => {
    const equipmentList = [
        { name: 'Принтер', photo: './public/Printer.jpg' },
        { name: 'Ноутбук', photo: './public/Printer.jpg'},
        { name: 'Монитор', photo: './public/Printer.jpg' },
        { name: 'Веб-камера', photo: './public/Printer.jpg' },
        { name: 'Проектор', photo: './public/Printer.jpg' }
    ];

    return (
        <div>
            <h1>Оборудование</h1>
            <EquipmentGallery equipmentList={equipmentList} />
        </div>
    );
};

export default EquipmentPage;
