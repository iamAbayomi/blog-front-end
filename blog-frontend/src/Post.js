import './App.css';

function Post(){
    return(
        <div className="App">
            <p>Post</p>
            <p>Title</p>
            <input className="title" placeholder="Post Title" />
            <p>Message </p>
            <input className="message" placeholder="Message Title"/>
            <button type="button">Submit</button>
        </div>
    )
}

export default Post