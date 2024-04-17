import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/ChatBotFormStyle.css";
import UseAlert from "./practice/JsPractice";
import ChatBotDialogButton from "./chatbot/buttons/ChatButton";
import DialogflowChat from "./chatbot/dialogflow/DialogFlowComponent";
import UsePlotly from "./chatbot/tensorflow/plotly/PlotlyGraph";


function App() {

    return (
        <div>
            <div>
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
                <UsePlotly/>
            <div
                style={{
                    marginLeft: `80%`
                }}
            ><ChatBotDialogButton/>
            </div>

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
