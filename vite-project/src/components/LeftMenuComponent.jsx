import React from "react";
import "/src/styles/ChatBotFormStyle.css";
import "/src/styles/LeftMenuComponentStyle.css";

import ChatBotDialogButton from "../chatbot/buttons/ChatButton";
import PlotlyGraphButton from "../chatbot/tensorflow/plotly/PlotlyGraphButton";

const UseLeftMenu = () =>{

    
    return (
        <div className="main-column">
            <ChatBotDialogButton/>
            <PlotlyGraphButton/>
            <ChatBotDialogButton/>
            <ChatBotDialogButton/>
        </div>
    );
}

export default UseLeftMenu;