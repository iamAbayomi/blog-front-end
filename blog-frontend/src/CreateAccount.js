import './App.css';

function App(){
    return(
        <div className="App">
            <h1>Sign In</h1>
            <div className="Name">
                <p>Email</p>
                <input className="input-field" placeholder="Email"/>
            </div>
            <div className="Message">
                <p>Password</p>
                <input className="input-field" placeholder="Password"/>
            </div>
            <button className="blue-button"> Submit </button>
        </div>
    )
}

export default App