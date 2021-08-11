/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import axios from 'axios'
import Comment from './Comment';
import Singleblog from './Singleblog';
import { useHistory } from 'react-router-dom';

export default class Blog extends React.Component {
  
  state = {
    post: [],
    comments: '',
    comment: {
        comment_name: '',
        comment_message: '',
        post_id: this.props.match.params.slug
    },
    rating: {
      rating_value : '',
      post_id: this.props.match.params.slug
    },
    avg_rating: ''
    
  }


  componentDidMount(){
    console.log('checkpoint',this.props)
    axios.get(`https://stark-falls-30261.herokuapp.com/apis/post/userpost/${this.props.match.params.slug}`)
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


    axios.get(`https://stark-falls-30261.herokuapp.com/apis/comment/${this.props.match.params.slug}`)
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


  
  editPost(){
    this.props.history.push(`/edit/${this.props.match.params.slug}`)
  }

  deletePost(){
    axios.delete(`https://stark-falls-30261.herokuapp.com/apis/post/${this.props.match.params.slug}`)
    .then((res) => {
      console.log('This is the data', res.data)
      this.props.history.goBack()
      
    })
    .catch((err) => {
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
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
  }

  createRating(){
    axios.post(`https://stark-falls-30261.herokuapp.com/apis/ratings/`, this.state.comment)
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
       <a href="/" className="link">
        <h1 className="blog-header"> Mini Blog Posts </h1>
        </a>
        <div className="blog-list">
            <Singleblog post= {this.state.post}/>
        </div>
        <div className="options-button">
          <button className="white-button" onClick={this.editPost.bind(this)}>Edit</button>
          <button className="red-button" onClick={this.deletePost.bind(this)}> Delete</button>
          <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Rate the Post
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">5</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">1</a></li>
              </ul>
          </div>
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
              <button className="black-button" onClick={this.sendComment.bind(this)}> Submit </button>
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
