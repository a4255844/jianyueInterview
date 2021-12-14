import Card from '@mui/material/Card';


export default function Item(props) {
  return (
    <Card style={{width: '166px', height:'200px', padding:'5px'}}>
      <h3>{props.name}</h3>
      <h4>Growth: {props.growth}%</h4> 
    </Card>
  );
}
