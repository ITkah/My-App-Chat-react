const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
        if(action.type === ADD_POST) {
            let newsPost = {
                id: 7,
                message: state.newPostText,
                like: 0
            };
            state.postData.push(newsPost);
            state.newPostText = '';
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            state.newPostText = action.newText;
        }
    return state;
}

export default profileReducer;

export const addPostActionCreater = () => ({type: ADD_POST})

export const updatePostActionCreater = (post) => ({type: UPDATE_NEW_POST_TEXT, newText:post})