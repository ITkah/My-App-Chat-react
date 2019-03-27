import React from 'react';
import './MessageFriend.scss';
import MessageFriendItem from './MessageFriendItem/MessageFriendItem';

const MessageFriend = (props) => {
  let FriendElements =
      props.friendData.map((friend,index) => <MessageFriendItem key={index} id={friend.id} name={friend.name} />);
    return (
      <div className="MessageFriend">
        { FriendElements }
      </div>
    );
}

export default MessageFriend;