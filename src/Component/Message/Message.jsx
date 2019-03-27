import React from 'react';
import './Message.scss';
import MessageFriend from './MessageFriend/MessageFriend';
import MessageDialog from './MessageDialog/MessageDialog'

const Message = (props) => {
    return (
      <section className="Message">
        <MessageFriend  friendData={props.state.friendData}/>
        <MessageDialog  messageData={props.state.messageData}/>
      </section>
    );
}

export default Message;