import React from 'react';

const UseAlert = () => {

    let admin;
    let name = "John";

    admin = name;

    const handlePressButton = () => {
        alert("Hello JavaScript!");
        alert(admin);
        
        let name = "Ilya";
        alert(`hello, ${1}`);
        alert(`hello, ${"name"}`);
        alert(`hello, ${name}`);

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

