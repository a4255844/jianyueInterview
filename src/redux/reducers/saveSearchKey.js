
import {SAVE_SEARCH_KEY} from '../constant'

const initState = '' //初始化状态
export default function saveSearchKeyReducer(preState=initState,action){

	const {type,data} = action
	switch (type) {
		case SAVE_SEARCH_KEY: 
			return data
		default:
			return preState
	}
}