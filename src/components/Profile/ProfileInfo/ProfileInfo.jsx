import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader.js";
import userPhoto from "../../../img/avatar3.jpg";

const ProfileInfo = ({ profile, status }) => {

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.profile_info}>
      <div className={classes.description}>
        <img
          className={classes.userPhoto}
          src={profile.photos.large || userPhoto}
          alt="profile img"
        />
        <div>
          <div>
            <b>Full name</b>: {profile.fullName}
          </div>
          <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
          </div>
          <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
          </div>
          <div>
            <b>About me</b>: {profile.aboutMe}
          </div>
          <div>
            <b>Contacts</b>:{" "}
            {Object.keys(profile.contacts).map((key) => {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
          </div>
        </div>
        <div>
          <b>Status: </b>
          <span>{status || "------"}</span>
        </div>
      </div>
    </div>
  );
};


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default ProfileInfo;
