const BASE_API_URL = {
  SIGNUP: '/api/v1/auth/register',
  LOGIN: '/api/v1/auth/login',
};

const POST_API_URL = {
  POST: '/api/v1/crawl/',
  POST_ADMIN: '/api/v1/crawl/admin',
  STATUS: '/api/v1/crawl/status/',
};

const USER_API_URL = {
  CHANGE_PASSWORD: '/api/v1/auth/change-password',
  PROFILE: '/api/v1/user',
  UPDATE_PROFILE: '/api/v1/user/me',
  USER_SKILL: '/api/v1/user/skill',
  USER_SAVE_POST: '/api/v1/user/save-post',
  USER: '/api/v1/user',
};

const ANALYZE_API_URL = {
  USER: '/api/v1/analyze/user',
  CRAWL: '/api/v1/analyze/crawl',
};

const CRAWL_API_URL = {
  ON_CRAWL_DATA: '/crawl',
};

const PREDICT_API_URL = {
  JOB_OPPORTUNITY: '/api/v1/job_future',
};

export {
  BASE_API_URL,
  POST_API_URL,
  USER_API_URL,
  ANALYZE_API_URL,
  CRAWL_API_URL,
  PREDICT_API_URL,
};
