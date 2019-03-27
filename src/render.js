import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, apdateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}  apdateNewPostText={apdateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}
