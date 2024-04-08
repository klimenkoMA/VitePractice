import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/ChatBotFormStyle.css";
import UseAlert from "./practice/JsPractice";
import ChatBotDialogButton from "./chatbot/buttons/ChatButton";
import UseTensorFlow from "./chatbot/tensorflow/TensorFlowComponent";

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
            <h1
                style={{
                    color: "white",
                }}
            >Vite + React</h1>
            <div
            style={{
               marginLeft: `85%`
            }}
            >
                <ChatBotDialogButton/>
            </div>

            <p className="read-the-docs">
                <UseAlert/>
                <UseTensorFlow/>
            </p>
        </div>
    )
}

export default App;
