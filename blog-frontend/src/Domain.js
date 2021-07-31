/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react'
import Bloglist from './component/Bloglist'

export default class App extends React.Component{

  state = {
    post: []
  }

  componentDidMount(){
    axios.get('https://stark-falls-30261.herokuapp.com/apis/post/1')
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
  }

  goToBlogPost(){
      
  }

  createBlogPost(){

  }

render() {
  return (
    <div className="App">
      <h1 className="blog-header"> Mini Blog Posts </h1>
        <Bloglist post={this.state.post}  />
            <img className="add-blogpost" src="blue_plus.svg"/>
    </div>

  );
}

}

