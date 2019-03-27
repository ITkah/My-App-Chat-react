import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import Message from './Component/Message/Message';
import News from './Component/News/News';
import Setting from './Component/Setting/Setting';
import Music from './Component/Music/Music';
import Footer from './Component/Footer/Footer';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="wrapper" id="wrapper">
          <Header />
            <main className="main" id="main">
              <Route path='/Profile' render={ () => 
              <Profile 
                profilePage={props.state.profilePage} 
                addPost={props.addPost}
                apdateNewPostText={props.apdateNewPostText}
              />}/>
              <Route path='/Message' render={ () => <Message state={props.state.messagesPage}/> }/>
              <Route path='/News'    render={ () => <News/> }/>
              <Route path='/Setting' render={ () => <Setting/> }/>
              <Route path='/Music'   render={ () => <Music/> }/>
            </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
}

export default App;
