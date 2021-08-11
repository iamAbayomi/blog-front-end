import React from 'react';
import axios from 'axios'
import './App.css';

export default class  Post extends React.Component {
    state ={
        post: {
            post_title: '',
            post_description: '',
            user_id: 1
        }
    }

    constructor(props){
        super(props)
        this.sendPost = this.sendPost.bind(this)
    }

    
    handlePostTitleChanged(event){
        var post = this.state.post
        post.post_title = event.target.value
        this.setState({post : post})
    }

    handlePostMessageChanged(event){ 
        var post = this.state.post
        post.post_description = event.target.value
        this.setState({post : post})
    }

    
    
    sendPost(){
        axios.post(`https://stark-falls-30261.herokuapp.com/apis/post/`, this.state.post)
        .then((res) => {
          console.log('This is the data', res.data)
          this.props.history.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    
    }

    render(){
    return(
        <div className="App">
            <h1>Post</h1>
            <div className="Name">
                <p>Title</p>
                <input className="input-field" placeholder="Enter this Name" value={this.state.post.post_title} onChange={this.handlePostTitleChanged.bind(this)}/>
            </div>
            <div className="Message">
                <p>Message</p>
                <textarea className="input-field message-field" placeholder="Enter this Message" value={this.state.post.post_description} onChange={this.handlePostMessageChanged.bind(this)} />
            </div>
             <button className="blue-button" onClick={this.sendPost} > Submit </button>
        </div>
    )
}}
