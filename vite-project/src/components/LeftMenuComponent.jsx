import React from "react";
import "/src/styles/ChatBotFormStyle.css";
import "/src/styles/LeftMenuComponentStyle.css";

import ChatBotDialogButton from "./chatbot/buttons/ChatButton";
import PlotlyGraphButton from "./chatbot/tensorflow/plotly/PlotlyGraphButton";
import UseEquipmentGalleryButton from "./gallery/EquipmentGalleryButton";
import UseDocumentsListButton from "./documents/DocumentsButton";

const UseLeftMenu = () => {

    return (
        <div className="main-column">
            <ChatBotDialogButton/>
            <PlotlyGraphButton/>
            <UseEquipmentGalleryButton/>
            <UseDocumentsListButton/>
        </div>
    );
}

export default UseLeftMenu;