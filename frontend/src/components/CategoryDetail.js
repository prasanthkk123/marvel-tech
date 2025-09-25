import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function CategoryDetail() {
  const { categoryName } = useParams();
  const category = products.find(
    cat => cat.category === decodeURIComponent(categoryName)
  );

  if (!category) return <div style={{padding:40}}>Category not found.</div>;

  return (
    <section style={{padding:40}}>
      <h2>{category.category}</h2>
      <div className='grid'>
        {category.items.map((item, ii) => (
          <div className='card' key={ii}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p style={{color:'#526377',fontSize:13}}>{item.description ? item.description : ''}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
