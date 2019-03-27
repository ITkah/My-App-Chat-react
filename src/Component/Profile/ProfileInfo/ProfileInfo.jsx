import React from 'react';
import './ProfileInfo.scss';
import Photo from '../../../img/avatar.jpg';


const ProfileInfo = (props) => {
    return (
      <div>
        <div className="ProfileInfo-photo">
            <img src={Photo} className="photo" alt="none" />
        </div>
        <div className="ProfileInfo-about">
            <h3>Tkachenko Ilya</h3>
            <p>1999-11-11</p>
            <p>Dnipro</p>
        </div>
      </div>
    );
}

export default ProfileInfo;