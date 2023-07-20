import { useMyVanDetail } from '../../../../core/Context/MyVanDetailContext';
import './style.css';

export default function MyVanPhotos() {
  const { myVanData } = useMyVanDetail();

  const imagesElements = myVanData.gallery.map(image => (
    <div className="images" key={image.id}>
      <img src={image.imageUrl} alt="Gallery" />
    </div>
  ));

  return (
    <section className='my-van-photos'>
      {imagesElements}
    </section>
  );
}