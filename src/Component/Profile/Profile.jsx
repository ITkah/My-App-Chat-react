import React from 'react';
import './Profile.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Posts/Post';

const Profile = (props) => {
    return (
      <section className="Profile">
        <ProfileInfo />
        <Post 
          postData={props.profilePage.postData} 
          newPostText={props.profilePage.newPostText} 
          addPost={props.addPost}
          apdateNewPostText={props.apdateNewPostText}
        />
      </section>
    );
}

export default Profile;