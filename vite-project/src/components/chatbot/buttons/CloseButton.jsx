import React from 'react';
import "/src/styles/ChatBotFormStyle.css";

const CloseButton = ({onClick}) => {

    return (
            <button
                className="close-button"
                onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="10"
                    height="10"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 12l6.646 6.646-1.414 1.414L11.293 13 4.646 19.646 3.232 18.232 9.879 11 3.232 4.354 4.646 2.94 11.293 9.586l6.646-6.646 1.414 1.414L12.707 12z"
                    />
                </svg>
            </button>
    );
};

export default CloseButton;
