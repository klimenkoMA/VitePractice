import React from 'react';
import EquipmentGallery from './EquipmentGallery';
import "/src/styles/GalleryStyle.css"

const EquipmentPage = () => {
    const equipmentList = [
        { name: 'Принтер', photo: './public/Printer.jpg' },
        { name: 'Ноутбук', photo: './public/Nout.jpg'},
        { name: 'Монитор', photo: './public/Monitor.jpg' },
        { name: 'Веб-камера', photo: './public/Camera.jpg' },
        { name: 'Проектор', photo: './public/Proector.jpg' },
        { name: 'Сканер', photo: './public/Scaner.jpg' }
    ];

    return (
        <div>
            <EquipmentGallery equipmentList={equipmentList} />
        </div>
    );
};

export default EquipmentPage;
