import React from "react";
import "/src/styles/ChatBotFormStyle.css";
import "/src/styles/LeftMenuComponentStyle.css";

import ChatBotDialogButton from "./chatbot/buttons/ChatButton";
import PlotlyGraphButton from "./chatbot/tensorflow/plotly/PlotlyGraphButton";
import UseEquipmentGalleryButton from "./gallery/EquipmentGalleryButton";

const UseLeftMenu = () => {

    return (
        <div className="main-column">
            <ChatBotDialogButton/>
            <PlotlyGraphButton/>
            <UseEquipmentGalleryButton/>
            <ChatBotDialogButton/>
        </div>
    );
}

export default UseLeftMenu;