import { useParams, Link, NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

import './style.css';
import { useEffect, useState } from 'react';
import { api } from '../../../../core/services/api';
import MyVansModel from '../../../../core/models/host-my-vans.model';
import HostVanDetailLayout from '../../../../components/HostVanDetailLayout/HostVanDetailLayout';
import { useMyVanDetail } from '../../../../core/Context/MyVanDetailContext';

export default function MyVanDetail() {
  const { id } = useParams();

  const { setVanToContext } = useMyVanDetail();

  const [myVan, setMyVan] = useState<MyVansModel>({} as MyVansModel);

  useEffect(() => {
    api.get(`my-vans/${id}`)
      .then(res => {
        setMyVan(res.data);
        setVanToContext(res.data);
      });
  }, []);

  return (
    <section className='container container-min-height-host my-van-detail-page'>

      <div className="back-button">
        <Link to={'/host/my-vans'}>
          <FaArrowLeft size={14} color={'#858585'} />
          Back to all vans
        </Link>
      </div>

      <div className="van-detail-box">

        {
          myVan && (
            <header>
              <img src={myVan.imageUrl} alt={myVan.name} />

              <div className='principal-information'>
                <div className={`van-type type-${myVan.type}`}>{myVan.type}</div>
                <h1>{myVan.name}</h1>
                <p className="price">${myVan.price} <span>/day</span></p>
              </div>
            </header>
          )
        }

        <HostVanDetailLayout id={id as string} />

      </div>

    </section>
  )
}