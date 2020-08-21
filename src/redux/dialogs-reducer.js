const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {

  switch ((action.type)) {
    case SEND_MESSAGE:
      let body = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: body }]
          }
    default:
      return state;
  }

}

export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });


export default dialogReducer;
