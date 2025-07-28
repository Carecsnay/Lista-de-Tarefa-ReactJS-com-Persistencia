import { useState } from "react";

function App() {
    const [message, setMessage] = useState("Olá React!");
    return (
        <div>
            <h1>{message}</h1>
            <button
                onClick={() => {
                    setMessage("Olá React Alterado!"); 
                }}
            >
                Teste
            </button>
        </div>
    );
}

export default App;
