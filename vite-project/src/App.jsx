import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/ChatBotFormStyle.css";
import UseAlert from "./practice/JsPractice";
import ChatBotDialog from "./chatbot/DialogChatBot";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div
            style={{
                width: `100%`,
                background: `url(/backFon.jpg)`,
                backgroundSize: `100% 100%`,
                backgroundRepeat: `no-repeat`,
                height:`max`
            }}
        >
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>
            <div>
                {/*<YandexAIComponent/>*/}
                <ChatBotDialog/>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                <UseAlert/>
            </p>
        </div>
    )
}

export default App;
