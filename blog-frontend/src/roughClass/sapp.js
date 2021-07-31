/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react'
import Blog from './Blog'
import Post from './Post'
import Main from './component/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Bloglist from './Main.js/Bloglist'

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

render() {
  return (
    <Router>
    <div className="App">
        
        <h1 className="blog-header"> Mini Blog Posts </h1> 
        
        <Link className="text-link" to="/blog"><Bloglist post={this.state.post} /></Link>

        <Link className="text-link" to="/post" > 
            <img className="add-blogpost" src="blue_plus.svg"/>
        </Link>

        <Switch>
        <Route exact path="/" component={Main} />
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/post">
                  <Post/>
            </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

}


