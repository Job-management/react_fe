declare namespace Types {
  interface ILoginRequest {
    email: string;
    password: string;
    isRememberMe?: boolean;
  }
  interface ILoginResultProperty {
    accessToken: string;
    refreshToken: string;
  }

  interface IDataLoginResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
    access_token: string;
    refresh_token: string;
  }
  interface ILoginResponse {
    error?: boolean;
    message: string;
    data: IDataLoginResponse;
    code: number;
    result?: ILoginResultProperty;
    timestamp?: number;
    stack?: string;
  }
  interface IDataSignupResponse {
    name: string;
    email: string;
    id: string;
    avatar: string;
  }
  interface ISignupResponse {
    error?: boolean;
    message: string;
    data: IDataSignupResponse;
    code: number;
    result?: ILoginResultProperty;
    timestamp?: number;
    stack?: string;
  }
  interface ISignUpRequest {
    name: string;
    email: string;
    password: string;
  }
}
