import React from "react";
import { reduxForm } from "redux-form";
// import { Field } from "redux-form";
import { Input, createField } from "../common/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/FormsControls.module.css";
import IntroPhoto from "../../img/social_media.jpg";
import s from "./login.module.css"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      Remember Me {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
      )}

      {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input)}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/myprofile"} />;
  }

  return (
    <div className={s.loginPage}>
      <div>
        <img
          src={
            IntroPhoto
            // require("../../../img/social_media.jpg")
          }
          alt="intro img"
        ></img>
      </div>
      <div className={s.loginBlock}>
        <h3>LOGIN</h3>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
