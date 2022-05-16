import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reposReducer from './features/repos/reposSlice';
import saga from './sagas/saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(middleware);
  },
});

sagaMiddleware.run(saga);
