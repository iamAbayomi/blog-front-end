/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react'

export default class App extends React.Component{

  state = {
    post: ''
  }

  componentDidMount(){
    axios.get('https://stark-falls-30261.herokuapp.com/apis/post/1')
    .then((res)=> {
      console.log('This is the data', res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

render() {
  return (
    <div className="App">
      <h1 className="blog-header"> Mini Blog Posts </h1>
      <div className="blog-list">
          <h3>Algorisim Interview</h3>
          <p>12-10-17 10 comments 5.5 ratings</p>
          {/* <p>12-10-17</p><p>10 comments</p> <p> 5.5 ratings</p> */}
          <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
      </div>
        
      <div className="blog-list">
          <h3>Algorisim Interview</h3>
          <p>12-10-17 10 comments 5.5 ratings</p>
          <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
      </div>

      
        <img className="add-blogpost" src="blue_plus.svg"/>
        {/* <div className="blog-list">
          <h2>Algorisim Interview</h2>
          <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p>12-10-17 10 comments 5.5 ratings</p>
        </div> */}
    </div>
  );
}

}