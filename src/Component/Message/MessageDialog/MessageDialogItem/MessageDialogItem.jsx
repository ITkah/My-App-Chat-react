import React from 'react';
import './MessageDialogItem.scss';

const MessageDialogItem = (props) => {
    return (
      <div className="MessageDialogItem">
          <div className="MessageDialogItem_photo">
              <img src={props.photo} alt="profile-dialog" className="dialogs-img" />
          </div>
          <div className="MessageDialogItem_message">
              <p>{props.message}</p>
          </div>
      </div>
    );
}

export default MessageDialogItem;