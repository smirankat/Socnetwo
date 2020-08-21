import React from 'react';
import classes from './Post.module.css';
import postUserPhoto from '../../../../img/avatar2.jpg'

const Post = (props) => {
    return (
      <div className = {classes.item}>
        <img src={ postUserPhoto
          // require('../../../../img/avatar2.jpg')
          } alt=""/>
        <div>{props.message}</div>
        <div>Like {props.likesCount}</div>
      </div>
    )
}

export default Post;
