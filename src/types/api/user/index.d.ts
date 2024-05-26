declare namespace Types {
  interface IChangePasswordRequest {
    currentPassword: string;
    password: string;
  }
  interface IUpdateUserInfo {
    avatar?: string;
    name?: string;
    birthday?: string;
    phone?: string;
  }
}
