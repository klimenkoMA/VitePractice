import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/ChatBotFormStyle.css";
import UseAlert from "./practice/JsPractice";
import ChatBotDialogButton from "./chatbot/buttons/ChatButton";
import DialogWithChatBotComponent from "./chatbot/DialogComponent";


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

            <div className="read-the-docs">
                <UseAlert/>
                <DialogWithChatBotComponent/>
                {/*<<UseTensorFlow/>*/}
                {/*<ModelConverter/>*/}
            </div>
        </div>
    )
}

export default App;
