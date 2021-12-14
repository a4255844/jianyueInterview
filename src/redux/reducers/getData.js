import {GET_DATA} from '../constant'

const initState = []

export default function getDataReducer(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case GET_DATA: 
			return [...data]
		default:
			return preState
	}
}
