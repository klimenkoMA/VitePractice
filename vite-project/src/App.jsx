import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/ChatBotFormStyle.css";
import UseAlert from "./practice/JsPractice";
import ChatBotDialogButton from "./components/chatbot/buttons/ChatButton";
import DialogflowChat from "./components/chatbot/dialogflow/DialogFlowComponent";
import UseLeftMenu from "./components/LeftMenuComponent";
import UsePlotly from "./components/chatbot/tensorflow/plotly/PlotlyGraph";


function App() {

    return (
        <div>
            <div className="logo-box">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h3
                style={{
                    color: "white",
                }}
            >Vite + React</h3>
            {/*<UsePlotly/>*/}
            <UseLeftMenu/>
            {/*<ChatBotDialogButton/>*/}

            <div className="read-the-docs">
                {/*<UseAlert/>*/}
                {/*<DialogflowChat/>*/}
                {/*<DialogWithChatBotComponent/>*/}
                {/*<<UseTensorFlow/>*/}
                {/*<ModelConverter/>*/}
            </div>
        </div>
    )
}

export default App;
