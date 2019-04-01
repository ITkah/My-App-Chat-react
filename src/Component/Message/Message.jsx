import React from 'react';
import './Message.scss';
import MessageFriend from './MessageFriend/MessageFriend';
import MessageDialog from './MessageDialog/MessageDialog'

const Message = (props) => {
    return (
      <section className="Message">
        <MessageFriend  
          store={props.store}
        />
        <MessageDialog  
          store={props.store}
        />
      </section>
    );
}

export default Message;