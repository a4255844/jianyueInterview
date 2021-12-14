import {GET_DATA} from '../constant'
import {IS_LODING} from '../constant'
import axios from 'axios'
// export const getData = data => ({type: GET_DATA, data })
export const getDataAsyn = (url, params) => {
	return (dispatch)=>{
    dispatch({type: IS_LODING, data: true})
    axios.post(url, params).then((res) => {
      dispatch({type: IS_LODING, data: false})
      if (res.data.status === 'OK') {
        const { product_trends } = res.data.data
        dispatch({type: GET_DATA, data: product_trends })
      }
    })
	}
}