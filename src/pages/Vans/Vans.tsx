import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { api } from '../../services/api';

import Van from '../../models/van.model';

export default function Vans() {
  const navigate = useNavigate();

  const filtersType = [
    'simple',
    'luxury',
    'rugged'
  ];

  const [vans, setVans] = useState<Array<Van>>([]);
  const [filters, setFilters] = useState<Array<string>>([]);

  useEffect(() => {
    api.get('vans')
      .then(res => setVans(res.data))
  }, []);

  useEffect(() => {
    filterListOfVans();
  }, [filters]);

  function filterIsActive(type: string) {
    const filterIsSelected = filters.filter(filter => filter === type);

    if (filterIsSelected && filterIsSelected.length > 0) {
      return true;
    }

    return false;
  }

  function handleFilters(filter: string) {
    const filterIsSelected = filters.filter(f => f === filter);

    if (filterIsSelected && filterIsSelected.length > 0) {
      setFilters(filters.filter(f => f !== filter));
      return;
    }

    setFilters([...filters, filter]);
  }

  function filterListOfVans() {
    let url = '';

    filters.forEach(filter => {
      url = url + `type=${filter}&`;
    });

    const urlWithoutLastCharacter = url.slice(0, -1);

    api.get(`vans?${urlWithoutLastCharacter}`)
      .then(res => setVans(res.data));
  }

  function clearFilters() {
    setFilters([]);
  }

  function redirectToVanDetail(id: string) {
    navigate(`/vans/${id}`);
  }

  const filterButtons = filtersType.map((filter) => (
    <button
      key={filter}
      className={(filterIsActive(filter) ? `btn-${filter}-active` : '')}
      onClick={() => handleFilters(filter)}
      type='button'
      id={`btn-${filter}`}>
      {filter}
    </button>
  ));

  const vanElements = vans.map((van) => (
    <div
      className="van-item"
      key={van.id}
      onClick={() => { redirectToVanDetail(van.id) }}>

      <img src={van.imageUrl} alt={van.name} />

      <div className="info">
        <h3>{van.name}</h3>
        <div className="price">
          <p>${van.price}</p>
          <p>/day</p>
        </div>
      </div>

      <div className={`type-box type-box-${van.type}`}>
        {van.type}
      </div>

    </div>
  ));


  return (
    <section className='container container-min-height vans-page'>

      <h1 className='title'>Explore our van options</h1>

      <div className="filters">
        <div className="filter-btn">
          {filterButtons}
        </div>
        <p className='clear-filters' onClick={clearFilters}>Clear filters</p>
      </div>

      <div className="van-list">
        {vanElements}
      </div>

    </section>
  )
}