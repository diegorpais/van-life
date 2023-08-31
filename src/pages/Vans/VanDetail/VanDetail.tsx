import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa6";

import './style.css';
import Van from '../../../core/models/van.model';
import { getVanDetail } from '../../../core/services/vans.service';

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    if (!id) return;

    getVanDetail(id)
      .then(res => setVan(res))
  }, []);


  return (
    <section className='container container-min-height van-detail-page'>

      {
        van ? (
          <>
            <p>
              <Link to={'/vans'}>
                <FaArrowLeft size={14} color={'#858585'} />
                Back to all vans
              </Link>
            </p>

            <img
              src={van.imageUrl}
              alt={van.name}
              className='van-img' />

            <div className={`van-type type-${van.type}`}>
              {van.type}
            </div>

            <div className="van-data">
              <h1>{van.name}</h1>
              <h3>${van.price} <span>/day</span></h3>
              <p> {van.description} </p>

              <button
                type='button'
                className='btn btn-primary'>
                Rent this van
              </button>
            </div>
          </>

        ) : (
          <h2>Loading...</h2>
        )
      }

    </section>
  );
}
