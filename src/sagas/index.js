import { all, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchStudentsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/api/students');
    yield put({ type: 'FETCH_STUDENTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_STUDENTS_FAILURE', error: error.message });
  }
}

function* createStudentSaga(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:3000/api/students', action.payload);
    yield put({ type: 'CREATE_STUDENT_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'CREATE_STUDENT_FAILURE', error: error.message });
  }
}

function* updateStudentSaga(action) {
  try {
    const response = yield call(axios.put, `http://localhost:3000/api/students/${action.payload.id}`, action.payload.data);
    console.log(response)
    yield put({ type: 'UPDATE_STUDENT_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'UPDATE_STUDENT_FAILURE', error: error.message });
  }
}

function* deleteStudentSaga(action) {
  try {
    yield call(axios.delete, `http://localhost:3000/api/students/${action.payload}`);
    yield put({ type: 'DELETE_STUDENT_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'DELETE_STUDENT_FAILURE', error: error.message });
  }
}

function* rootSaga() {
  yield all([
    takeEvery('FETCH_STUDENTS_REQUEST', fetchStudentsSaga),
    takeEvery('CREATE_STUDENT_REQUEST', createStudentSaga),
    takeEvery('UPDATE_STUDENT_REQUEST', updateStudentSaga),
    takeEvery('DELETE_STUDENT_REQUEST', deleteStudentSaga),
  ]);
}

export default rootSaga;
