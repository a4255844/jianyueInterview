import {withRouter} from 'react-router-dom'

function Logo(props) {
  console.log(props);
  return(
    <div style={{fontSize: '20px', borderBottom:'1px solid black', height: '40px', display:'flex', alignItems:'center'}}>
      <div style={{marginRight:'10px', cursor: 'pointer'}} onClick={() => {
        props.history.push('/')
      }}>
        <span style={{fontWeight:'700'}}>Best</span>Search
      </div>
      {props.children}
    </div>
  )
}
export default withRouter(Logo)