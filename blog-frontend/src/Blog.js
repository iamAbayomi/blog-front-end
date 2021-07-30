import React from 'react';
import './App.css';
import axios from 'axios'
import Comment from './component/Comment';
import Singleblog from './component/Singleblog'

export default class  App extends React.Component {
  
  state = {
    post: [],
    comments: '',
    comment: {
        comment_name: '',
        comment_message: '',
        post_id: 3
    }
    
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


    axios.get('https://stark-falls-30261.herokuapp.com/apis/comment/3')
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

  
  handleCommentNameChanged(event ){
    var comment = this.state.comment
    comment.comment_name = event.target.value
    this.setState({comment: comment})
  }

  handleCommentMessageChanged(event){
    var comment = this.state.comment
    comment.comment_message = event.target.value
    this.setState({comment: comment})
  }

  sendComment(){
    axios.post(`https://stark-falls-30261.herokuapp.com/apis/comment/`, this.state.comment)
        .then((res) => {
          console.log('This is the data', res.data)
          this.forceUpdate()
        })
        .catch((err) => {
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
                  <input className="input-field" placeholder="Enter this Name" value={this.state.comments.comment_name} onChange={this.handleCommentNameChanged.bind(this)}/>
              </div>
              <div className="Message">
                  <p>Message</p>
                  <textarea className="input-field message-field" placeholder="Enter this Message" value={this.state.comments.comment_message} onChange={this.handleCommentMessageChanged.bind(this)}/>
              </div>
              <button className="blue-button" onClick={this.sendComment.bind(this)}> Submit </button>
          </div>
          {this.state.comments ?
          <div>
          <p> {this.state.comments.length} comments </p>
          <Comment comments={this.state.comments} className="list=of-comments"  />
          </div>
          : <div/>

        }
      </div>
    );
  }
}
