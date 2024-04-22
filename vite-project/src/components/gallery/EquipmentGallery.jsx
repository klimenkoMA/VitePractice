import React from 'react';
import "/src/styles/GalleryStyle.css";

const EquipmentGallery = ({equipmentList}) => {
    return (
        <div className="gallery-box">
            {equipmentList.map((equipment, index) => (
                <img className="gallery-photo"
                     key={index} src={equipment.photo}
                     alt={equipment.name}/>
            ))}
        </div>
    );
};

export default EquipmentGallery;
