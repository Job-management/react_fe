declare namespace Types {
  interface IPostState {
    actionType: string;
    loading: boolean;
    postsList: IDataPostResponse[];
    postData: IDataPostResponse | undefined;
    postTotalSize: number | undefined;
  }
}
