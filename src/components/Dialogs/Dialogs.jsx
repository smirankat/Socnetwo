import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));
  // let newMessageText = state.newMessageText;


  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  }

  if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength50 = maxLengthCreator(50)


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
    <Field component={Textarea} validate={[required, maxLength50]} name='newMessageText' placeholder='Enter your message' />
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>

  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
