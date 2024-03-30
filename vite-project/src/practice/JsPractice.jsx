import React from 'react';

const UseAlert = () => {

    const handlePressButton = () => {
        alert("Hello JavaScript!");
    };

    return (
        <div>
            <button
                onClick={handlePressButton}>
                ALERT
            </button>
        </div>
    );
};

export default UseAlert;