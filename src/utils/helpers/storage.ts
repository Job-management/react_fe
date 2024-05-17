import { TOKEN } from '@utils/constants/auth';

export enum STORAGE {
  LANGUAGE,
  USER_TOKEN,
  USER_DATA,
  USER_REFRESH,
  TWO_FACTOR,
}

export function getLocalStorage(key: STORAGE) {
  return localStorage.getItem(STORAGE[key]);
}

export function setLocalStorage(key: STORAGE, value: string) {
  return localStorage.setItem(STORAGE[key], value);
}

export function setAccessToken(key: TOKEN.ACCESS_TOKEN_KEY, value: string) {
  return localStorage.setItem(key, value);
}

export function setRefreshToken(key: TOKEN.REFRESH_TOKEN_KEY, value: string) {
  return localStorage.setItem(key, value);
}

export function removeLocalStorage(key: STORAGE) {
  return localStorage.removeItem(STORAGE[key]);
}
