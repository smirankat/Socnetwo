import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photo: require ( '../img/avatar1.jpg'),
    //   followed: true,
    //   name: "Harry",
    //   status: "Who wants to live forever",
    //   city: "Moscow",
    // },
    // {
    //   id: 2,
    //   photo: require ( '../img/avatar2.jpg'),
    //   followed: true,
    //   name: "Jack",
    //   status: "We are the champions",
    //   city: "Paris",
    // },
    // {
    //   id: 3,
    //   photo: require ( '../img/avatar3.jpg'),
    //   followed: true,
    //   name: "Marcus",
    //   status: "We will rock you",
    //   city: "London",
    // },
    // {
    //   id: 4,
    //   photo: require ( '../img/avatar4.jpg'),
    //   followed: false,
    //   name: "Scarlett",
    //   status: "Show must go on",
    //   city: "Rome",
    // },
    // {
    //   id: 5,
    //   photo: require ( '../img/avatar5.jpg'),
    //   followed: false,
    //   name: "James",
    //   status: "I want to break free",
    //   city: "Berlin",
    // },
    // {
    //   id: 6,
    //   photo: require ( '../img/avatar6.jpg'),
    //   followed: false,
    //   name: "Lucy",
    //   status: "Don't stop me now",
    //   city: "New York",
    // },
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.requestUsers(currentPage, pageSize)
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
};

// export const follow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     usersAPI.follow(userId).then((Response) => {
//       if (Response.data.resultCode === 0) {
//         dispatch(followSuccess(userId));
//       }
//       dispatch(toggleFollowingProgress(false, userId));
//     });
//   };
// };

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
  }
}
// export const follow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     let response = await usersAPI.follow(userId)
//       if (response.data.resultCode === 0) {
//         dispatch(followSuccess(userId));
//       }
//       dispatch(toggleFollowingProgress(false, userId));
//   };
// };
// export const unfollow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     let response = await usersAPI.unfollow(userId)
//       if (response.data.resultCode === 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       dispatch(toggleFollowingProgress(false, userId));
//   };
// };

export default usersReducer;
