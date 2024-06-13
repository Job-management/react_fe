declare namespace Types {
  interface IChangePasswordRequest {
    currentPassword: string;
    password: string;
  }
  interface IResetPasswordRequest {
    password: string;
    token: string;
  }
  interface IForgotPasswordRequest {
    email: string;
  }
  interface IUpdateUserInfo {
    avatar?: string;
    name?: string;
    birthday?: string;
    phone?: string;
  }
  interface IUpdateSkill {
    major: string;
    years_exp: number;
    skill: Array<string>;
    city: string;
    level: string;
  }
}
