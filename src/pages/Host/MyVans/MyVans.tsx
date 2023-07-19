import { useEffect, useState } from 'react';
import './style.css';
import MyVansModel from '../../../core/models/host-my-vans.model';
import { api } from '../../../core/services/api';
import ListedVans from '../ListedVans/ListedVans';

export default function MyVans() {
  const [vans, setVans] = useState<Array<MyVansModel>>([]);

  useEffect(() => {
    api.get('my-vans')
      .then(res => setVans(res.data));
  }, []);


  return (
    <section className='my-vans-page container container-min-height'>
      <h1 className='title'>Your listed vans</h1>

      <ListedVans listedVans={vans} />
    </section>
  )
}