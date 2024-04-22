import React from 'react';

const EquipmentGallery = ({equipmentList}) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {equipmentList.map((equipment, index) => (
                <img key={index} src={equipment.photo}
                     alt={equipment.name} style={{
                    width: '200px',
                    height: '200px',
                    margin: '10px'
                }}/>
            ))}
        </div>
    );
};

export default EquipmentGallery;
