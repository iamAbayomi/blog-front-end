import React from 'react'

export default class Comment extends React.Component{
    render(){
        return(
            <div>
                {this.props.comments.map((comment) =>(
                <div>
                    <p className="comments-name">{comment.comment_name}</p>
                    <p className="comments-date info-label" >{comment.comment_date}</p>
                    <p className="comments-message" > {comment.comment_message}</p>
                </div>
                
                ))}
            </div>
        )
    }

}