import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import state from './redux/state';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

addPost('fix');

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();