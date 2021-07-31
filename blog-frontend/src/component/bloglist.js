import React from 'react'
import { useHistory } from 'react-router-dom'

function Bloglist(props){
    const history = useHistory()
    // function reducePostlength(post_description){
    //     return post_description.substring(0, 400)
    // }
    
    function goToBlogPost(){
      history.push('/blog')
    }
  
        return(
            <div>
                {props.post.map((post) =>(
                    <div className="blog-list" onClick={goToBlogPost}>
                        <h3>{post.post_title}</h3>
                        {/* <p>12-10-17 10 comments 5.5 ratings</p> */}
                        <p>{post.post_createdAt}</p>
                        <p>
                            {/* {this.reducePostlength(post.post_description)} */}
                            {post.post_description}
                        </p>
                    </div>

                ))}
            </div>

        )


}

export default Bloglist