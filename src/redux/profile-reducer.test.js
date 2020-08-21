
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'


let state = {
  postsData: [
    { id: 1, message: "Hi Hello", likesCount: 12 },
    { id: 2, message: "How Are you", likesCount: 28 },
  ],
};


test('length of posts should be incremented', () => {

  //1.test data
  let action = addPostActionCreator('hey')

  //2.action
  let newState = profileReducer(state, action)

  //3.expectation
  expect(newState.postsData.length).toBe(3)
})

test('new message should be added', () => {

  //1.test data
  let action = addPostActionCreator('hey')

  //2.action
  let newState = profileReducer(state, action)

  //3.expectation
  expect(newState.postsData[2].message).toBe('hey')
})

test('length of posts should be decremented after deleting', () => {

  //1.test data
  let action = deletePost(1)

  //2.action
  let newState = profileReducer(state, action)

  //3.expectation
  expect(newState.postsData.length).toBe(1)
})

test(`length of posts shouldn't be changed after deleting incorrect id`, () => {

  //1.test data
  let action = deletePost(1000)

  //2.action
  let newState = profileReducer(state, action)

  //3.expectation
  expect(newState.postsData.length).toBe(2)
})



