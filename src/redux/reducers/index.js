/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'
import searchKey from './saveSearchKey'
import data from './getData'
import isLoding from './isLoding'

//汇总所有的reducer变为一个总的reducer
export default  combineReducers({
	searchKey,
	data,
	isLoding
})
