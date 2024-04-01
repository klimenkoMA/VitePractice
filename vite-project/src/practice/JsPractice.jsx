import React from 'react';

const UseAlert = () => {

    const handlePressButton = () => {

        let auth = prompt("Кто там?", '');

        if (auth === "Админ") {
            let pass = prompt("Введите пароль", '');

            if (pass === "Я Главный") {
                alert("Здравствуйте");
            } else if (pass === '' || pass === null) {
                alert("Отменено");
            } else {
                alert("Неверный пароль");
            }
        } else if (auth === '' || auth === null) {
            alert("Отменено");
        } else {
            alert("Я вас не знаю");
        }
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

