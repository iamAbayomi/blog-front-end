import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="blog-header"> Mini Blog Posts </h1>
      <div className="blog-list">
          <h2>Algorisim Interview</h2>
          <p>12-10-17 10 comments 5.5 ratings</p>
          <p>   There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.

                There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
                
                There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
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

        <div>
            <p className="comments-name">Oladini Abayomi</p>
            <p className="comments-date info-label" >Wed Jan 13 2021 14:05:35 GMT+0100 (West Africa Standard Time)</p>
            <p className="comments-message" > Great Content but miro is hard is to use</p>
        </div>
        
    </div>
  );
}

export default App;
