import React from 'react';
import './Profile.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Posts/Post';

const Profile = (props) => {
    return (
      <section className="Profile">
        <ProfileInfo />
        <Post postData={props.state.postData} addPost={props.addPost} />
      </section>
    );
}

export default Profile;