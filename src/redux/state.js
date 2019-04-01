import Avatar from '../img/avatar.jpg';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state : {
        profilePage: {
            postData :[
                {id:1, message:"hello Wourld", like: 132},
                {id:2, message:"i love Js", like: 22},
                {id:3, message:"i web-dev", like: 53},
                {id:4, message:"My React App", like: 23},
                {id:5, message:"Go go go", like: 18},
                {id:5, message:"^-^", like: 11},
                {id:6, message:"*-*", like: 1}
            ],
            newPostText:''
        },
        messagesPage: {
            friendData :[
                {id: 1, name:"Dima"},
                {id: 2, name:"Sveta"},
                {id: 3, name:"Ilya"},
                {id: 4, name:"Mark"}
            ],
            messageData :[
                {id: 1, message:"Hello how are you?", photo:Avatar},
                {id: 2, message:"I`m fine", photo:Avatar},
                {id: 3, message:"I love js",  photo:Avatar},
                {id: 4, message:"I too",  photo:Avatar}
            ],
            newMessageBody: ''
        }
    },

    getState() {
        return this._state;
    },

    renderEntireTree() {
        console.log('store');
    },

    subscribe(observer){
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._renderEntireTree(this._state);
    }
}



window.state = store;
export default store;
