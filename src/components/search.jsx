import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon'
import React, { useRef, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import { saveSearchKey } from '../redux/actions/saveSearchKey'
import { getDataAsyn } from '../redux/actions/getData'
function Search(props) {
  const key = useSelector(state => state.searchKey);
  const searchKey = useRef(null)
  const dispatch = useDispatch()
  // 组件加载完毕如果有key则直接给input框,
  useEffect(() => {
    console.log(key, 'search');
    if (key) {
      const url = 'http://3.141.23.218:5000/interview/keyword_search'
      const params = {
        login_token: "INTERVIEW_SIMPLY2021",
        search_phrase: key 
      }
      searchKey.current.value = key
      //发请求的action
      dispatch(getDataAsyn(url, params))
    }
  }, [key])
  function handlerSearch() {
    //转换搜索字符串的逻辑
    let keyVal = searchKey.current.value.trim()
    // 为空直接返回
    if (!keyVal) return
    //保存searchKey到rudex
    dispatch(saveSearchKey(keyVal))
    const keyValArr = keyVal.split(' ')
    if (keyValArr.length) {
      keyVal = keyValArr.join('+')
    }
    props.history.push(`/search/${keyVal}`)
  }
  return(
    <>
      <div>
        <input 
          type="text" 
          style={{height:'25px', width:'800px', borderRadius: '5px'}}
          placeholder='Search for new products in 961K stores'
          ref={searchKey}
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              handlerSearch()
            }
          }}
        />
        <Button style={{height:'30px', marginLeft:'10px'}} variant="outlined"
          onClick={() => {
            handlerSearch()
          }}
        
        >
          <Icon>search</Icon>
        </Button>
      </div>
    </>
  )
}

export default withRouter(Search)