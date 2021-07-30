import React from 'react'
import './App.css';

export default class Headline extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                {this.props.post.map((post) =>(
                    <div className="blog-list">
                        <h3>{post.post_title}</h3>
                        {/* <p>12-10-17 10 comments 5.5 ratings</p> */}
                        <p>{post.post_createdAt}</p>
                        <p>{post.post_description}</p>
                    </div>

                ))}
            </div>

        )
    }

}
