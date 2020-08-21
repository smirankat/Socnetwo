import React from "react";
import classes from "./Profile.module.css";
import MyProfileInfo from "./ProfileInfo/MyProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main className={classes.profile}>
      <MyProfileInfo
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

export default Profile;
