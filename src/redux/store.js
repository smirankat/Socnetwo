import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi Hello", likesCount: 12 },
        { id: 2, message: "How Are you", likesCount: 28 },
      ],
      newPostText: "qwe",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Harry" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Marcus" },
        { id: 4, name: "Scarlett" },
        { id: 5, name: "James" },
        { id: 6, name: "Lucy" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hey" },
        { id: 5, message: "Hiya" },
        { id: 6, message: "Howdy" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};


export default store;
window.store = store;
