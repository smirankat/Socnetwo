import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8f376b15-b78a-4759-b3fc-dabfb184004f",
  },
});

export const usersAPI = {

  requestUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object' )
    return profileAPI.getProfile(userId)
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile) {
const formData = new FormData()
formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },

};

export const authAPI = {
  me() {
    return instance.get(
      `auth/me`
    )
  },
  login(email, password, rememberMe=false, captcha = null) {
    return instance.post(
      `auth/login`, {email, password, rememberMe, captcha}
    )
  },
  logout() {
    return instance.delete(
      `auth/login`
    )
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(
      `security/get-captcha-url`
    )
  },
}