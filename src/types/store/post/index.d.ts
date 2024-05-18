declare namespace Types {
  interface IPostState {
    actionType: string;
    loading: boolean;
    postsList: IDataPostResponse[];
  }
}
