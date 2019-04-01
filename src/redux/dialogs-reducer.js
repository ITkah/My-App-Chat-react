import Avatar from '../img/avatar.jpg';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
      SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messageData :[
        {id: 1, message:"Hello how are you?", photo:Avatar},
        {id: 2, message:"I`m fine", photo:Avatar},
        {id: 3, message:"I love js",  photo:Avatar},
        {id: 4, message:"I too",  photo:Avatar}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
        if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            state.newMessageBody = action.body;
        } else if (action.type === SEND_MESSAGE){
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 5, message: body, photo:Avatar});
        }
    return state;
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})