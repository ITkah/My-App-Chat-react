import React from 'react';
import './MessageDialog.scss';
import MessageDialogItem from './MessageDialogItem/MessageDialogItem';
import { updateNewMessageCreator, sendMessageCreator } from '../../../redux/dialogs-reducer';

const MessageDialog = (props) => {
    let state = props.store.getState().messagesPage;

    let messageElements = 
        state.messagesPage.map((message,index) => <MessageDialogItem key={index} id={message.id} message={message.message} photo={message.photo}/>);

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageCreator(body));
    }

    let sendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
    }
    
    return (
      <div className="MessageDialog">
        { messageElements }
        <div className="MessageDialogItem_send">
              <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
              <button onClick={sendMessageClick}>Send</button>
          </div>
      </div>
    );
}

export default MessageDialog;