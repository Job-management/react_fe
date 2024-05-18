import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers<Types.IStoreState>({
  auth: authReducer,
  post: postReducer,
});

const store = configureStore({ reducer: rootReducer });

// Inferred type
export type AppDispatch = typeof store.dispatch;

export default store;
