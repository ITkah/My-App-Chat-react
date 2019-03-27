import React from 'react';
import './Post.scss';
import PostItem from './PostItem/PostItem';

const Post = (props) => {
  
  let PostElemenst = 
      props.postData.map((post,index) => <PostItem key={index} message={post.message} like={post.like} id={post.id} /> );

  let newPostSend = React.createRef();

  let newPost = () => {
      props.addPost();
  }

  let onPostChange = () => {
      let post = newPostSend.current.value;
      props.apdateNewPostText(post);
  }

    return (
      <div className="Post">
        <div className="Post-add">
          <div className="Post-textarea">
            <textarea onChange={onPostChange} ref={ newPostSend } value={props.newPostText}></textarea>
          </div>
          <div className="Post-send">
            <button onClick={ newPost }>Send</button>
          </div>
        </div>
          { PostElemenst }
      </div>
    );
}

export default Post;