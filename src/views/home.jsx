import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from '../components/logo'

// import {Route, Routes, Link} from 'react-router-dom'
import Search from '../components/search';
export default function Home(props) {
  return (
    <div>
      <Logo />
      <div 
        className='title'
        style={{marginTop: '10%', fontSize: '40px', textAlign: 'center', marginBottom: '60px'}}
      >
        Search Trends
      </div>
      <Container>
        <Box sx={{ height: '100vh', display: 'flex', justifyContent:'center' }}>
          <Search/>
        </Box>
    </Container>
    </div>
  );
}