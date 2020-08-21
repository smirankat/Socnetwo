import React from "react";
import classes from "./Profile.module.css";
import ProfileInfoCopy from "./ProfileInfo/ProfileInfoCopy";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileCopy = (props) => {
  return (
    <main className={classes.profile}>
      <ProfileInfoCopy
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </main>
  );
};

export default ProfileCopy;
