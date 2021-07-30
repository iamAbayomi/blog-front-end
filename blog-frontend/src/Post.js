import './App.css';

function Post(){
    return(
        <div className="App">
            <h1>Post</h1>
            <div className="Name">
                <p>Title</p>
                <input className="input-field" placeholder="Enter this Name"/>
            </div>
            <div className="Message">
                <p>Message</p>
                <textarea className="input-field message-field" placeholder="Enter this Message"/>
            </div>
            <button className="blue-button"> Submit </button>
        </div>
    )
}

export default Post