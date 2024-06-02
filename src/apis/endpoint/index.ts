const BASE_API_URL = {
  SIGNUP: '/api/v1/auth/register',
  LOGIN: '/api/v1/auth/login',
};

const POST_API_URL = {
  POST: '/api/v1/crawl/',
};

const USER_API_URL = {
  CHANGE_PASSWORD: '/api/v1/auth/change-password',
  PROFILE: '/api/v1/user',
  UPDATE_PROFILE: '/api/v1/user/me',
  USER_SKILL: '/api/v1/user/skill',
  USER_SAVE_POST: '/api/v1/user/save-post',
  USER: '/api/v1/user',
};

export { BASE_API_URL, POST_API_URL, USER_API_URL };
