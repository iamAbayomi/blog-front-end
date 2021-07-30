import React from 'react';
import './App.css';
import axios from 'axios'
import Comment from './component/Comment';
import Singleblog from './component/Singleblog'

export default class  App extends React.Component {
  
  state = {
    post: [],
    comments: []
  }

  componentDidMount(){
    axios.get('https://stark-falls-30261.herokuapp.com/apis/post/userpost/3')
    .then((res)=> {
      console.log('This is the data', res)
      this.setState(
        {
          post: res.data
        }
      )
    })
    .catch((err)=>{
      console.log(err)
    })


    axios.get('https://stark-falls-30261.herokuapp.com/apis/comment')
    .then((res)=> {
      console.log('This is the data', res)
      this.setState(
        {
          comments: res.data
        }
      )
    })
    .catch((err)=>{
      console.log(err)
    })

    
  }
  
  render(){
    return (
      <div className="App">
        <h1 className="blog-header"> Mini Blog Posts </h1>
        <div className="blog-list">
            <Singleblog post= {this.state.post}/>
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
          <Comment comments={this.state.comments} className="list=of-comments"  />
      </div>
    );
  }
}
