import {IS_LODING} from '../constant'

const initState = false

export default function getDataReducer(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case IS_LODING: 
			return data
		default:
			return preState
	}
}
