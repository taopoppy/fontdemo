import { takeEvery,put } from 'redux-saga/effects'
import {
	GET_INIT_LIST
} from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'

function* getInitList() {
	try {
		const res = yield axios.get('http://localhost:4000/list?media=blog&media=wechat&media=taopoppy')
		const action = initListAction(res.data)
		yield put(action) // put方法代替了store.dispatch
	} catch (error) {
		console.log('api request is wrong')
	}
}

function* mySaga() {
	// 捕获到GET_INIT_LIST这个action，执行getInitList方法
	yield takeEvery(GET_INIT_LIST ,getInitList)
}

export default mySaga;