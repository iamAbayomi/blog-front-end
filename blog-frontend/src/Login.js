import React from 'react';
import './App.css';
import axios from 'axios'

export default class LogIn extends React.Component{
    state = {
       user: {
        email: '',
        password: ''
        }
    }

    LogIn(){
        axios.post(`https://stark-falls-30261.herokuapp.com/apis/user/login`, this.state.user )
        .then((res) => {
          console.log('This is the data', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    handleuserEmailChanged(event ){
        var user = this.state.user
        user.email = event.target.value
        this.setState({user: user})
      }
    
      handleuserPaswordChanged(event){
        var user = this.state.user
        user.password = event.target.value
        this.setState({user: user})
      }
    
    
    render(){
    return(
        <div className="App">
            <h1>Log In</h1>
            <div className="email">
                <p>Email</p>
                <input className="input-field" placeholder="Email" value={this.state.user.email} onChange={this.handleuserEmailChanged.bind(this)}/>
            </div>
            <div className="pasword">
                <p>Password</p>
                <input className="input-field" type="password" placeholder="Password" value={this.state.user.password} onChange={this.handleuserPaswordChanged.bind(this)} />
            </div>
            <button className="black-button" onClick={this.LogIn.bind(this)}> Submit </button>
        </div>
    )}
}

