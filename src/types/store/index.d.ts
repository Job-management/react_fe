declare namespace Types {
  interface IStoreState {
    auth: Reducer<IAuthState>;
    post: Reducer<IPostState>;
    user: Reducer<IUserState>;
  }
}
