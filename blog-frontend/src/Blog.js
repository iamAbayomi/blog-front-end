import './App.css';
import Comment from './component/Comment';
import Singleblog from './component/Singleblog'

function App() {
  return (
    <div className="App">
      <h1 className="blog-header"> Mini Blog Posts </h1>
      <div className="blog-list">
          <Singleblog/>
      </div>
        <div className="comments-box">
            <h4>Leave a Reply</h4>
            <div className="Name">
                <p>Name</p>
                <input className="input-field" placeholder="Enter this Name"/>
            </div>
            <div className="Message">
                <p>Message</p>
                <textarea className="input-field message-field" placeholder="Enter this Message"/>
            </div>
            <button className="blue-button"> Submit </button>
        </div>

        <p> 10 comments</p>
        <Comment className="list=of-comments" />
        
        
    </div>
  );
}

export default App;
