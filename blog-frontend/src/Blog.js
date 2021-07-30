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
            <p>Leave a Reply</p>
            <div className="Name">
                <p>Name</p>
                <input className="Name" placeholder="Enter this Name"/>
            </div>
            <div className="Message">
                <p>Message</p>
                <input className="Name" placeholder="Enter this Message"/>
            </div>
            <button type="button"> Submit </button>
        </div>

        <p> 10 comments</p>

        <div>
            <p>Oladini Abayomi</p>
            <p>Wed Jan 13 2021 14:05:35 GMT+0100 (West Africa Standard Time)</p>
            <p> Great Content but miro is hard is to use</p>
        </div>
        
    </div>
  );
}

export default App;
