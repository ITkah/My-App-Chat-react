import React from 'react';
import './PostItem.scss';
import Photo from '../../../../img/avatar.jpg';

const PostItem = (props) => {
    return (
        <div className="Post-block">
            <div className="Post-block_photo">
              <img src={Photo} className="photo-post" alt="none" />
            </div>
            <div className="Post-block_text">
              <p>{props.message}</p>
            </div>
            <div className="Post-block_like">
              <span>like {props.like}</span>
            </div>
        </div>
    );
}

export default PostItem;