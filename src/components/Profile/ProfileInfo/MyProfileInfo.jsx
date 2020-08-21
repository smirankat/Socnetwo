import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader.js";
import userPhoto from "../../../img/avatar3.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const MyProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then (
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div className={classes.profile_info}>
      <div className={classes.description}>
        <img
          className={classes.userPhoto}
          src={props.profile.photos.large || userPhoto}
          alt="profile img"
        />
        {props.isOwner && <input type={"file"} onChange={onPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm initialValues={props.profile}  profile={props.profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner} />
        )}

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
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
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default MyProfileInfo;
