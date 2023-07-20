import { useMyVanDetail } from '../../../../core/Context/MyVanDetailContext';
import './style.css';

export default function MyVanPrice() {
  const { myVanData } = useMyVanDetail();
  return (
    <p className='my-van-price'>
      ${myVanData.price} <span>/day</span>
    </p>
  )
}