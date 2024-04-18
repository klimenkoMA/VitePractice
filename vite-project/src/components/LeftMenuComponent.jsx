import React from "react";
import "/src/styles/ChatBotFormStyle.css";
import "/src/styles/LeftMenuComponentStyle.css";

import ChatBotDialogButton from "../chatbot/buttons/ChatButton";

const UseLeftMenu = () =>{

    
    return (
        <div className="main-column">
            <ChatBotDialogButton/>
            <ChatBotDialogButton/>
            <ChatBotDialogButton/>
            <ChatBotDialogButton/>
        </div>
    );
}

export default UseLeftMenu;