import {call, takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
  reposFetched,
  reposFetchFailed,
  reposRequested,
} from '../features/repos/reposSlice';
import {sagaActions} from './sagaActions';

// Fetch data from API
let callAPI = async ({url, method, data}) => {
  return await axios({
    url,
    method,
    data,
  });
};

export function* fetchRepos() {
  try {
    yield put(reposRequested);

    let result = yield call(() =>
      callAPI({
        url: 'https://api.github.com/orgs/react-native-community/repos',
      }),
    );

    yield put(reposFetched(result.data));
  } catch (e) {
    yield put(reposFetchFailed(e.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_REPOS_SAGA, fetchRepos);
}
