import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Logo from '../components/logo'
import Search from '../components/search'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveSearchKey } from '../redux/actions/saveSearchKey'
import Item from '../components/item'

export default function SearchPage(props) {
  const dispatch = useDispatch()
  const dataList = useSelector(state => state.data)
  const isLoding = useSelector(state => state.isLoding)
  //组件加载完获取url上的参数并转换后存入rudex
  useEffect(() => {
    let key = props.match.params.keyWord.trim()
    const keyArr = key.split('+')
    if (keyArr.length) {
      key = keyArr.join(' ')
    }
    dispatch(saveSearchKey(key))
  },[])
  function loading() {
    const dom = []
    for (let i = 0; i < 4; i++) {
      dom.push(
          <Stack spacing={1} key={i}>
            <Skeleton variant="text" width={150}/>
            <Skeleton variant="text" width={100}/>
            <Skeleton variant="rectangular" width={150} height={118} />
          </Stack>
      )
    }
    return dom
  }
  function renderItem() {
    
    return dataList.map((item, index) => {
      const props = {
        name: item.name,
        growth: item.growth
      }
      return <Item key={index} {...props}/>
    })
  }
  return (
    <>
      <Logo>
        <Search />
      </Logo>

      <Container style={{width:'851px'}}>
        <h2>Related product trends</h2>
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'space-between',  flexWrap:'wrap'}}>
          {isLoding ? loading() : renderItem()}
        </Box>
      </Container>
    </>
  );
}