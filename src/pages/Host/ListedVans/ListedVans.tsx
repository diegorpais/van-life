import { Link } from 'react-router-dom';

import './style.css';
import ListedVansProps from '../../../models/Listed-vans-props.model';

export default function ListedVans(props: ListedVansProps) {
  const vansElements = props.listedVans.map(van => (
    <div className='box-listed-vans' key={van.id}>
      <img src={van.imageUrl} alt={van.name} />

      <div className="listed-vans-info">
        <h1>{van.name}</h1>
        <p>${van.price}/day</p>
      </div>

      <Link to={`/host/vans/edit/${van.id}`}>Edit</Link>
    </div>
  ));

  return (
    <>
      {vansElements}
    </>
  )
}