import React from "react";


const PostItem = (props) =>{

    return(
        <div className="PostItem">
            <div className="post">
                <div className='post__content'>
                    <strong>1. {props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__Btn">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem;