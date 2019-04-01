import React from 'react';
import './Post.scss';
import PostItem from './PostItem/PostItem';
import {addPostActionCreater, updatePostActionCreater} from './../../../redux/profile-reducer';

const Post = (props) => {
    let state = props.store.getState().profilePage;

    let PostElemenst = 
        state.profilePage.map((post,index) => <PostItem key={index} message={post.message} like={post.like} id={post.id} /> );

    let newPostText = state.newPostText;

    let onPostChange = (e) => {
      let post = e.target.value;
      props.store.dispatch(updatePostActionCreater(post));
    }

    let newPost = () => {
      props.store.dispatch(addPostActionCreater());
    }

    return (
      <div className="Post">
        <div className="Post-add">
          <div className="Post-textarea">
            <textarea onChange={onPostChange} value={newPostText}></textarea>
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