import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from '../../img/avatar1.jpg';

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
        <div className={classes.usersBlock}>
          <div>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small: userPhoto

                      // : require("../../img/avatar1.jpg")
                  }
                  className={classes.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button disabled = {followingInProgress.some(id=>id===user.id)}
                  onClick={() => {
                    unfollow(user.id)
                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.unfollow(u.id).then((Response) => {
                    //   if (Response.data.resultCode === 0) {
                    //     props.unfollow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled = {followingInProgress.some(id=>id===user.id)}
                  onClick={() => {
                    follow(user.id)

                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.follow(u.id).then((Response) => {
                    //   if (Response.data.resultCode === 0) {
                    //     props.follow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{user.city}</div>
            </div>
          </div>
        </div>
      )
};

export default User;
