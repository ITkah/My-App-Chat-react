import React from 'react';
import './MessageFriendItem.scss';
import {NavLink} from 'react-router-dom';

const MessageFriendItem = (props) => {
    let path = "/Message/" + props.id;
    return (
      <div className="MessageFriendItem">
          <h3><NavLink activeClassName={'active-link'} to={path}>{props.name}</NavLink></h3>
      </div>
    );
}

export default MessageFriendItem;