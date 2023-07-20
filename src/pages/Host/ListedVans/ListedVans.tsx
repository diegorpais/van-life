import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

import './style.css';
import ListedVansProps from '../../../core/models/listed-vans-props.model';

export default function ListedVans(props: ListedVansProps) {
  const vansElements = props.listedVans.map(van => (
    <div className='box-listed-vans' key={van.id}>
      <img src={van.imageUrl} alt={van.name} />

      <div className="listed-vans-info">
        <h1>{van.name}</h1>
        <p>${van.price}/day</p>
      </div>

      <Link to={`/host/my-vans/${van.id}`}>
        <FaArrowRight size={20} color={'#161616'} />
      </Link>
    </div>
  ));

  return (
    <>
      {vansElements}
    </>
  )
}

