import { useEffect, useState } from 'react';
import './style.css';
import MyVansModel from '../../../core/models/host-my-vans.model';
import ListedVans from '../ListedVans/ListedVans';
import { getMyVansData } from '../../../core/services/vans.service';

export default function MyVans() {
  const [vans, setVans] = useState<Array<MyVansModel>>([]);

  useEffect(() => {
    getMyVansData()
      .then(res => setVans(res));
  }, []);


  return (
    <section className='my-vans-page container container-min-height-host'>
      <h1 className='title'>Your listed vans</h1>

      <ListedVans listedVans={vans} />
    </section>
  )
}