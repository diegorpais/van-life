import { useMyVanDetail } from '../../../../core/Context/MyVanDetailContext';
import './style.css';

export default function MyVanInfo() {

  const { myVanData } = useMyVanDetail();

  return (
    <section className='my-van-info'>
      <p>Name: <span> {myVanData.name}</span></p>
      <p className='type'>Category: <span>{myVanData.type}</span></p>
      <p>Description: <span>{myVanData.description}</span></p>
      <p>Visibility: <span>{myVanData.visibility}</span></p>
    </section>
  )
}