import React from 'react'

export default class Singleblog extends React.Component {
    

    render(){
        return(
            <div>
                    <div className="blog-list">
                        <h3>{this.props.post.post_title}</h3>
                        {/* <p>12-10-17 10 comments 5.5 ratings</p> */}
                        <p>{this.props.post.createdAt}</p>
                        <p>
                            {this.props.post.post_description}
                        </p>
                    </div>
            </div>

        )
    }

}
