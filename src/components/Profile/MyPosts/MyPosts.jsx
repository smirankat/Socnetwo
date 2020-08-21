import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder='Post message' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {
  let postsElements =[...props.postsData]
  .reverse()
  .map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.my_posts}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
