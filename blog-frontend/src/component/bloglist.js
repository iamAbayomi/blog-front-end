import React from 'react'

export default class Bloglist extends React.Component {
    
    reducePostlength(post_description){
        return post_description.substring(0, 400)
    }
    
    render(){
        return(
            <div>
                {this.props.post.map((post) =>(
                    <div className="blog-list">
                        <h3>{post.post_title}</h3>
                        {/* <p>12-10-17 10 comments 5.5 ratings</p> */}
                        <p>{post.post_createdAt}</p>
                        <p>
                            {this.reducePostlength(post.post_description)}
                        </p>
                    </div>

                ))}
            </div>

        )
    }

}
