import React from 'react';
import './MessageDialog.scss';
import MessageDialogItem from './MessageDialogItem/MessageDialogItem';

const MessageDialog = (props) => {
    let messageElements = 
        props.messageData.map((message,index) => <MessageDialogItem key={index} id={message.id} message={message.message} photo={message.photo}/>);

    let newMessageSend = React.createRef();

    let message = () => {
      let message = newMessageSend.current.value;
      alert(message);
    }

    return (
      <div className="MessageDialog">
        { messageElements }
        <div className="MessageDialogItem_send">
              <textarea ref={newMessageSend}></textarea>
              <button onClick={message}>Send</button>
          </div>
      </div>
    );
}

export default MessageDialog;