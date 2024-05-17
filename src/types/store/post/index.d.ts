declare namespace Types {
  interface IPostState {
    actionType: string;
    loading: boolean;
    posts: IDataPostResponse[] | undefined;
  }
}
