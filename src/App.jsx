import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello Vite + React!</p>
                <p>count is: {count}</p>
                <div>
                    <button type="button" onClick={() => setCount(count => count - 1)}>
                        -
                    </button>
                    <button type="button" onClick={() => setCount(count => count + 1)}>
                        +
                    </button>
                </div>
            </header>
        </div>
    )
}

export default App
