import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter, Switch } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader";
import store from "./redux/redux-store";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";
import IntroPhoto from "./img/social_media.jpg";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const MyProfileContainer = React.lazy(() =>
  import("./components/Profile/MyProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
alert('some error ocurred')
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
componentWillUnmount() {
  window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)

}

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper_content">
          {/* <Route exact path="/" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}
          <Switch>
            <Route
              path="/myprofile/:userId?"
              render={withSuspense(MyProfileContainer)}
            />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <div>
                    <Suspense fallback={<div>Loading...</div>}>
                      <DialogsContainer />
                    </Suspense>
                  </div>
                );
              }}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/profile/:userId" render={() => <ProfileContainer />} />
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <img
                      src={
                        IntroPhoto
                        // require("../../../img/social_media.jpg")
                      }
                      alt="intro img"
                    ></img>
                  </div>
                );
              }}
            />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocnetwoApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SocnetwoApp;
